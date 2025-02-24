import { initializeApp, cert, ServiceAccount } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";
import serviceAccount from "../bed-demo-f2b52-firebase-adminsdk-lv6lt-201598650e.json";
import { getAuth, Auth } from "firebase-admin/auth"

initializeApp({
	credential: cert(serviceAccount as ServiceAccount),
});

const auth: Auth = getAuth();
const db: Firestore = getFirestore();

export { auth, db };


