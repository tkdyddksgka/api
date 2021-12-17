import { Channel, Edition, IResult, Mode } from "./playground.ts";

class Playground {
  mode!: Mode;
  ch!: Channel;
  backtrace!: boolean;
  edition!: Edition;

  constructor(
    mode: Mode = Mode.Debug,
    channel: Channel = Channel.Stable,
    backtrace: boolean = false,
    edition: Edition = Edition.E2018,
  ) {
    this.mode = mode;
    this.ch = channel;
    this.backtrace = backtrace;
    this.edition = edition;
  }

  async run(code: string): Promise<IResult> {
    const body = {
      channel: this.ch,
      mode: this.mode,
      backtrace: this.backtrace,
      edition: this.edition,
      code: code,
      crateType: "bin",
      tests: false,
    };
    const response = await fetch("https://play.rust-lang.org/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return new Promise((resolve, reject) => {
      response.json().then(resolve, reject);
    });
  }
}

export { Playground };
