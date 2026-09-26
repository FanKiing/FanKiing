import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <p className="ar" lang="ar">{profile.arabicName}</p>
        <p>Winter is coming. My deployment is already live.</p>
        <small>
          © {new Date().getFullYear()} {profile.fullName} · Blood of the dragon, fire of the keyboard
        </small>
      </div>
    </footer>
  );
}
