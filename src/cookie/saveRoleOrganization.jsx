"use server";

import { cookies } from "next/headers";

export default async function saveToken({ data }) {
  cookies().set("me", data);
}
