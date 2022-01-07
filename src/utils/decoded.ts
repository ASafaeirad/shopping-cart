import jwt_decode from "jwt-decode";

export interface DecodeToken {
  exp: number;
  iat: number;
  id: number;
}

export const decodedToken = (): DecodeToken | undefined => {
  const token: string | null = localStorage.getItem("token");

  if (token) {
    const decoded = jwt_decode<DecodeToken>(token);
    const currentTime = new Date().getTime();

    const isExpired = currentTime - decoded.exp <= 0;

    if (isExpired) {
      localStorage.removeItem("token");
    }
    return decoded;
  }
};
