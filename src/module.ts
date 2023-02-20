export interface TestMessage {

    testEnd?: {
      name: string;
      status: "passed" | "failed" | "ignored";
      duration: number;
      error?: Error;
    };
    end?: {
      filtered: number;
      ignored: number;
      measured: number;
      passed: number;
      failed: number;
      duration: number;
      results: Array<TestMessage["testEnd"] & {}>;
    };
  }
  export interface RunTestsOptions {
    /** If `true`, Deno will exit with status code 1 if there was
     * test failure. Defaults to `true`.
     * @i18n 如果为 `true`，当测试失败时 Deno 将以状态码 1 退出。默认为 `true`。*/
    exitOnFail?: boolean;
    /** If `true`, Deno will exit upon first test failure. Defaults to `false`.
     * @i18n 如果为 `true`，Deno 将在第一次测试失败后退出。默认值为 `false`。*/
    failFast?: boolean;
    /** String or RegExp used to filter test to run. Only test with names
     * matching provided `String` or `RegExp` will be run.
     * @i18n 用于筛选要运行的测试的字符串或正则表达式。只有当测试名称与提供的 `String` 或 `RegExp` 相匹配时才会运行。*/
    filter?: string | RegExp;
    /** String or RegExp used to skip tests to run. Tests with names
     * matching provided `String` or `RegExp` will not be run.
     * @i18n 用于跳过要运行的测试的字符串或正则表达式。当测试名称与提供的 `String` 或 `RegExp` 相匹配时将不会运行。*/
    skip?: string | RegExp;
    /** Disable logging of the results. Defaults to `false`.
     * @i18n 禁用记录结果. 默认值为 `false`。*/
    disableLog?: boolean;
    /** If true, report results to the console as is done for `deno test`. Defaults to `true`.
     * @i18n 如果为 `true`，将 `deno test` 完成的结果输出到控制台。默认值为 `true`。*/
    reportToConsole?: boolean;
    /** Called for each message received from the test run.
     * @i18n 回调从测试运行收到的每个消息。*/
    onMessage?: (message: TestMessage) => void | Promise<void>;
  }
  /** Run any tests which have been registered via `Deno.test()`. Always resolves
     * asynchronously.
     *
     * @i18n 运行所有通过 `Deno.test()` 注册的测试。始终异步 resolve。
     *
     *        // 注册一个测试。
     *        Deno.test({
     *          name: "example test",
     *          fn(): void {
     *            assertEquals("world", "world");
     *            assertEquals({ hello: "world" }, { hello: "world" });
     *          },
     *        });
     *
     *        // 运行所有已经注册过的测试。
     *        const runInfo = await Deno.runTests();
     *        console.log(runInfo.duration);  // all tests duration, e.g. "5" (in ms)
     *        console.log(runInfo.stats.passed);  //e.g. 1
     *        console.log(runInfo.results[0].name);  //e.g. "example test"
     */