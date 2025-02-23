import { initializeApp, cert, ServiceAccount } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";
import serviceAccount from "../back-end-guide-firebase-adminsdk-zowlz-07bd7155e3.json";

initializeApp({
	credential: cert(serviceAccount as ServiceAccount),
});

const db: Firestore = getFirestore();

export { db };
