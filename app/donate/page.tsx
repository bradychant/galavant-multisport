import { redirect } from "next/navigation";
import { GIVEBUTTER_URL } from "../constants";

export default function DonatePage() {
  redirect(GIVEBUTTER_URL);
}
