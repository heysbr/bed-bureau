import LogoutIcon from "@/assets/icons/logout.svg"
import Image from "next/image"
export default function LogoutButton() {
  return (
    <button type="button" className="btn btn-light"><Image src={LogoutIcon} alt="logout btn"/>LogoutButton</button>
  )
}