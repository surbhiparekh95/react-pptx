import * as React from "react";
import "./index";
import { renderPPTX } from "./index";
import fs = require("fs");

describe("test render", () => {
  it("ok", async () => {
    const test = (
      <presentation>
        <slide>
          <text x={0} y={0} w={1} h={0.2}>
            Hello world
          </text>
        </slide>
        <slide>
          <image
            url="https://www.abeautifulsite.net/uploads/2014/08/tinypng-logo.png?width=600&key=a909caf7ff544565d9e4befbd97e4e2652440001d7b5a53df36123e6cd7ef5cf"
            x={0}
            y={2}
            w={4}
            h={4}
          />
        </slide>
        <slide>
          <text x={0} y={0} w={1} h={0.2}>
            Hello world
          </text>
        </slide>
      </presentation>
    );
    await renderPPTX(test);
  }, 25000);
});
