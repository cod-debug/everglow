const fs = require("fs-extra");

async function execute() {
  let build_dir = "./build";
  try {
    if (!fs.existsSync(build_dir)) {
      fs.mkdirSync(build_dir, { recursive: true });
    }

    await fs.copy("imsmanifest.xml", `${build_dir}/imsmanifest.xml`, { overwrite: true });
    console.log("Success to transfer imsmanifest.xml file to build.");
  } catch (err) {
    console.error(err);
  }
}

execute();