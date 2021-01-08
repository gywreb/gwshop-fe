import reducer from "../reducer";
export * from "./register.type";
export * from "./user.type";

export type RootState = ReturnType<typeof reducer>;
