import ftp from "basic-ftp";
import { question, loadJson } from "./ConsoleUtils.js";
import { Secrets } from "./Secrets.js";

let secrets: Secrets = null;
const client = new ftp.Client();

try {
    secrets = loadJson<Secrets>("./secrets.json");
} catch (e) {
    console.error("Couldn't load password from secrets.json", e);
}

try {
    await client.access({
        host: "ftp.cappassionata.pt",
        user: secrets?.ftpUser ?? await question({
            prompt: "Username: ",
        }),
        password: secrets?.ftpPassword ?? await question({
            prompt: "Password: ",
            silent: true,
            replace: "*",
        }),
    });
    
    console.log("Cleaning public_html directory.");
    await client.ensureDir("public_html");
    await client.clearWorkingDir();
    
    console.log("Uploading build artifacts.");
    await client.uploadFromDir("./build");

    console.log("Done uploading artifacts, everything went well!");
} catch (e) {
    console.error("Error while deploying the build:", e);
}

console.log("Job done, closing the client.");
client.close();
