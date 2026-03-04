import {
  FullConfig,
  Reporter,
  Suite,
  TestCase,
  TestResult,
} from "@playwright/test/reporter";
import * as fs from "fs";

class MyReporter implements Reporter {
  onBegin(config: any, suite: any) {
    console.log(`Execution of ${suite.allTests().length} tests`);
  }

  onEnd(result: { status: any }) {
    console.log(`Execution finished with status of ${result.status}`);
  }

  onTestBegin(test: TestCase, result: TestResult): void {
    console.log(`Execution of ${test.title} started`);
  }

  onTestEnd(
    test: any,
    result: {
      [x: string]: any;
      errors: any;
      status: any;
    },
  ) {
    const execTime = result.duration;
    const data = {
      test: test.title,
      status: result.status,
      executionTime: execTime,
      errors: result.errors,
    };
    const dataToString = JSON.stringify(data, null, 2);
    console.log(dataToString);
    fs.writeFileSync("test-result.json", dataToString);
  }
}
