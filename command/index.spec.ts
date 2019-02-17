import { OnCommand, OffCommand, UpCommand, DownCommand } from "./command";
import { BasicAirConditioner } from "./device";
import { CommandHistory } from "./history";

describe("Command", () => {
  describe("Command", () => {
    describe("OnCommand", () => {
      test("OnCommand turns on the device", () => {
        const device = new BasicAirConditioner();
        const onCommmand = new OnCommand(device);

        onCommmand.execute();
        expect(device.isActive).toBe(true);
      });

      test("Undoable", () => {
        const device = new BasicAirConditioner();
        const onCommmand = new OnCommand(device);

        onCommmand.unexecute();
        expect(device.isActive).toBe(false);
      });
    });

    describe("OffCommand", () => {
      test("OffCommand turns off the device", () => {
        const device = new BasicAirConditioner();
        const offCommmand = new OffCommand(device);

        offCommmand.execute();
        expect(device.isActive).toBe(false);
      });

      test("Undoable", () => {
        const device = new BasicAirConditioner();
        const offCommmand = new OffCommand(device);

        offCommmand.unexecute();
        expect(device.isActive).toBe(true);
      });
    });

    describe("UpCommand", () => {
      test("UpCommand turns up the temperature", () => {
        const initialTemperature = 25;
        const device = new BasicAirConditioner(initialTemperature);
        const upCommmand = new UpCommand(device);

        upCommmand.execute();
        expect(device.temperature).toBe(initialTemperature + 1);
      });

      test("Undoable", () => {
        const initialTemperature = 25;
        const device = new BasicAirConditioner(initialTemperature);
        const upCommand = new UpCommand(device);

        upCommand.unexecute();
        expect(device.temperature).toBe(initialTemperature - 1);
      });
    });

    describe("DownCommand", () => {
      test("DownCommand turns down the temperature", () => {
        const initialTemperature = 25;
        const device = new BasicAirConditioner(initialTemperature);
        const downCommmand = new DownCommand(device);

        downCommmand.execute();
        expect(device.temperature).toBe(initialTemperature - 1);
      });

      test("Undoable", () => {
        const initialTemperature = 25;
        const device = new BasicAirConditioner(initialTemperature);
        const downCommmand = new DownCommand(device);

        downCommmand.unexecute();
        expect(device.temperature).toBe(initialTemperature + 1);
      });
    });
  });

  describe("History", () => {
    const device = new BasicAirConditioner();
    const upCommand = new UpCommand(device);
    const downCommand = new DownCommand(device);
    test("History is clearable", () => {
      const history = new CommandHistory();
      history.add(upCommand);

      expect(history.commands).toHaveLength(1);
      history.clear();
      expect(history.commands).toHaveLength(0);
    });

    describe("Undo", () => {
      test("Commands are undoable", () => {
        const history = new CommandHistory();
        history.add(upCommand);
        history.add(downCommand);

        expect(history.commands).toEqual([upCommand, downCommand]);
        history.undo();
        expect(history.commands).toEqual([upCommand]);
      });

      test("Undo does nothing when history is empty", () => {
        const history = new CommandHistory();
        history.undo();

        expect(history.commands).toHaveLength(0);
      });
    });
  });
});
