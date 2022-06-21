import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const authenticate = (data: any, next: () => any) => {
  if (typeof window.localStorage !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

const outlineType = (showPassword: boolean) => {
  if (showPassword) return "text";
  return "password";
};

// uploadImageToFirebase Function
const uploadImageToFirebase = async (image: any, fileName: string) => {
  let URL;
  try {
    const storage = getStorage();
    // const storagefileName = fileName;
    const storageRef = ref(storage, fileName);

    await uploadBytes(storageRef, image).then(() => {
      // console.log("image uploaded successfully to firebase");
    });
    await getDownloadURL(ref(storage, fileName)).then((url) => {
      // console.log("getDownloadURL success");
      // console.log(url);
      URL = url;
    });
  } catch (error) {
    console.error(
      "There was an error uploading a file to Cloud Storage:",
      error
    );
    URL = "";
  }
  return URL;
};

// Get currentUser from localstorage
const getCurrentUserFromLocalStorage = () => {
  let jwt: string | null = "";
  if (typeof window.localStorage !== "undefined") {
    jwt = localStorage.getItem("jwt");
    return JSON.parse(jwt!).user;
  }
};

export { outlineType, uploadImageToFirebase, getCurrentUserFromLocalStorage };
