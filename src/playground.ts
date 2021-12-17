enum Mode {
  Debug = "debug",
  Release = "release",
}

enum Channel {
  Stable = "stable",
  Beta = "beta",
  Nightly = "nightly",
}

enum Edition {
  E2015 = "2015",
  E2018 = "2018",
  E2021 = "2021",
}

interface IResult {
  success: number;
  stdout: string;
  stderr: string;
}

export { Channel, Edition, Mode };
export type { IResult };
