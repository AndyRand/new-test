import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { BasicAuthGuard } from "../../auth/basicAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { ProductController } from "../product.controller";
import { ProductService } from "../product.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  updatedAt: new Date(),
  vendor: "exampleVendor",
  price: 42.42,
  createdAt: new Date(),
  title: "exampleTitle",
};
const CREATE_RESULT = {
  id: "exampleId",
  updatedAt: new Date(),
  vendor: "exampleVendor",
  price: 42.42,
  createdAt: new Date(),
  title: "exampleTitle",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    updatedAt: new Date(),
    vendor: "exampleVendor",
    price: 42.42,
    createdAt: new Date(),
    title: "exampleTitle",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  updatedAt: new Date(),
  vendor: "exampleVendor",
  price: 42.42,
  createdAt: new Date(),
  title: "exampleTitle",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Product", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ProductService,
          useValue: service,
        },
      ],
      controllers: [ProductController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(BasicAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /products", async () => {
    await request(app.getHttpServer())
      .post("/products")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      });
  });

  test("GET /products", async () => {
    await request(app.getHttpServer())
      .get("/products")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
        },
      ]);
  });

  test("GET /products/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/products"}/${nonExistingId}`)
      .expect(404)
      .expect({
        statusCode: 404,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /products/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/products"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});