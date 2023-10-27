"use server";

import { cookies } from "next/headers";

export default async function saveToken() {
  cookies().delete("token");
}
