const getFile = require("../lib/index");

const arrayResult = [
  {
    FileList:
      "[FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList)",
  },
];

describe("getFile", () => {
  it("Should be function", () => expect(typeof getFile).toBe("function"));

  it("Should return result's array", async () => {
    const results = await getFile(
      "/home/juliofreitas/lib_link/tests/files/text1.md"
    );
    expect(results).toEqual(arrayResult);
  });

  it("Should return message Error", async () => {
    const results = await getFile(
      "/home/juliofreitas/lib_link/tests/files/text1_no_links.md"
    );
    expect(results).toBe("não há links");
  });

  it("Should return any Exception", async () => {
    const results = getFile("/home/juliofreitas/lib_link/tests/files/tex");
    await expect(results).rejects.toThrow(/não há arquivo no caminho/);
  });
});
