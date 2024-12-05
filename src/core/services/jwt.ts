import { JWTPayload, SignJWT, jwtVerify } from "jose";

export const JWT_SECRET_KEY = new TextEncoder().encode(import.meta.env.VITE_SECRET_KEY);

async function generateToken(payload: object): Promise<string> {
  const token: string = await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(JWT_SECRET_KEY);

  return token;
}

async function decodeToken(token: string): Promise<JWTPayload> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET_KEY);

    return payload as JWTPayload;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
}

export const jwtService = { generateToken, decodeToken };
