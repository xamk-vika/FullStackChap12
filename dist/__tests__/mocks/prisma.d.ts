import { PrismaClient } from "../../generated/prisma/client.js";
import { DeepMockProxy } from "vitest-mock-extended";
export type MockPrismaClient = DeepMockProxy<PrismaClient>;
export declare const prismaMock: any;
