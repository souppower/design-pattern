import { Directory, FileItem } from "./composite";

describe("Composite", () => {
  describe("Directory", () => {
    test("Directory has a name", () => {
      const directoryName = "directory";
      const directory = new Directory(directoryName);

      expect(directory.name).toBe(directoryName);
    });

    test("Directory can be added to a directory", () => {
      const directory = new Directory("directory");

      const fileName = "file";
      const file = new FileItem(fileName);

      directory.add(file);

      expect(directory.list).toHaveLength(1);
      expect(directory.list[0].name).toBe(fileName);
    });

    test("Directory can be added to a directory", () => {
      const directory = new Directory("directory");

      const innerDirectoryName = "innerDirectory";
      const innerDirectory = new Directory(innerDirectoryName);

      directory.add(innerDirectory);

      expect(directory.list).toHaveLength(1);
      expect(directory.list[0].name).toBe(innerDirectoryName);
    });

    describe("Recursive printing", () => {
      const makeMockEntry = () => {
        const rootDirectory = new Directory("root");
        const binDirectory = new Directory("bin");
        const usrDirectory = new Directory("usr");

        const tmpFile = new FileItem("tmp");
        const etcFile = new FileItem("etc");

        rootDirectory.add(etcFile);

        rootDirectory.add(usrDirectory);

        binDirectory.add(tmpFile);
        rootDirectory.add(binDirectory);

        return rootDirectory;
      };

      test("Directory can return its content in the printable format", () => {
        const mockEntry = makeMockEntry();
        const expected = "/root/etc\n/root/usr\n/root/bin/tmp";

        expect(mockEntry.print()).toBe(expected);
      });
    });
  });

  describe("File", () => {
    test("File has a name", () => {
      const fileName = "file";
      const file = new FileItem(fileName);

      expect(file.name).toBe(fileName);
    });

    test("File can return its name in the printable format", () => {
      const fileName = "file";
      const file = new FileItem(fileName);
      const expected = `/${fileName}`;

      expect(file.print()).toBe(expected);
    });

    test("Attempt to add anything to a File throws", () => {
      const file = new FileItem("file");
      expect(() => file.add(file)).toThrow();
    });
  });
});
