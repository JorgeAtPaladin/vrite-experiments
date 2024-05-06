/** @jsx createElement */
/** @jsxFrag createFragment */
import {
  ExtensionElementViewContext,
  Components,
  createView,
  createRuntime,
  createElement,
} from "@vrite/sdk/extensions";

declare global {
  interface Window {
    currentRequestController?: AbortController;
  }
}

type Config = {};

export default createRuntime({
  elements: [
    {
      type: "Audit",
      view: createView<
        ExtensionElementViewContext<
          Config,
          { network: string, language: string, url: string }
        >
      >(({ use, css }) => {
        const [network, setNetwork] = use("props.network");
        if (!network) setNetwork("Ethereum");
        const [language, setLanguage] = use("props.language");
        if (!language) setLanguage("Solidity");
        const [url, setURL] = use("props.url");

        return (
          <Components.View
            class={css`items-center justify-start p-2 m-0 my-4 border-b-2 border-gray-200 dark:border-gray-700`}
          >
            <Components.Content>
              <Components.Element type="Title">
                <Components.View class={css`border-b-2 border-gray-200 dark:border-gray-700`}
                >
                  <Components.Content allowed={["heading"]} />
                </Components.View>
              </Components.Element>

              <Components.Element type="Metadata">

                <Components.View class={css`flex flex-row gap-2`}>
                  <Components.Element type="Network">
                    <Components.Field type="text" label="Network" placeholder="Ethereum" bind:value={network} />
                  </Components.Element>
                  <Components.Element type="Language">
                    <Components.Field type="text" label="Language" placeholder="Solidity" bind:value={language} />
                  </Components.Element>
                  <Components.Element type="URL">
                    <Components.Field type="text" label="URL" placeholder="https://..." bind:value={url} />
                  </Components.Element>
                </Components.View>
              </Components.Element>

              <Components.Element type="Scope">
                <Components.View
                >
                  <Components.View
                    class={css`mr-1 text-gray-500 dark:text-gray-400 font-bold text-base h-[35px] font-mono min-w-40`}
                  >
                    Scope
                  </Components.View>
                  <Components.Content />
                </Components.View>
              </Components.Element>

              <Components.Element type="Contracts">
                <Components.View
                  class={css``}
                >
                  <Components.View
                    class={css`mr-1 text-gray-500 dark:text-gray-400 font-bold text-base h-[35px] font-mono min-w-40`}
                  >
                    Contracts
                  </Components.View>
                  <Components.Content />
                </Components.View>
              </Components.Element>
            </Components.Content>
          </Components.View>
        );
      })
    },
    {
      type: "Contract",
      view: createView<
        ExtensionElementViewContext<
          Config
        >
      >(({ use, css }) => {
        return (
          <Components.View
            class={css`items-center justify-start p-2 m-0 my-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700`}
          >
            <Components.Content>
              <Components.Element type="Title">
                <Components.View
                  class={css`items-start p-4 border-b-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-t-2xl`}
                >
                  <Components.Content allowed={["paragraph"]} />
                </Components.View>
              </Components.Element>
              <Components.Element type="Description">
                <Components.View
                  class={css`border-b-2 p-4 border-gray-200 dark:border-gray-700`}
                >
                  <Components.View
                    class={css`mr-1 text-gray-500 dark:text-gray-400 font-bold text-base h-[35px] font-mono min-w-40 inline-flex items-center`}
                  >
                    Description
                  </Components.View>
                  <Components.Content />
                </Components.View>
              </Components.Element>
              <Components.Element type="PrivilegedFunctions">
                <Components.View
                  class={css`border-b-2 p-4 border-gray-200 dark:border-gray-700`}
                >
                  <Components.View
                    class={css`mr-1 text-gray-500 dark:text-gray-400 font-bold text-base h-[35px] font-mono min-w-40 inline-flex items-center`}
                  >
                    Privileged functions
                  </Components.View>
                  <Components.Content />
                </Components.View>
              </Components.Element>

              <Components.Element type="Issues">
                <Components.View
                  class={css`border-b-2 p-4 border-gray-200 dark:border-gray-700`}
                >
                  <Components.View
                    class={css`mr-1 text-gray-500 dark:text-gray-400 font-bold text-base h-[35px] font-mono min-w-40 inline-flex items-center`}
                  >
                    Issues
                  </Components.View>
                  <Components.Content />
                </Components.View>
              </Components.Element>
            </Components.Content>
          </Components.View>
        );
      })
    },
    {
      type: "Issue",
      view: createView<
        ExtensionElementViewContext<
          Config,
          { severity: "informational" | "low" | "medium" | "high" | "governance",
            resolution: "pending" | "acknowledged"| "partially" | "resolved"
          }
        >
      >(({ use, css }) => {
        const [severity, setSeverity] = use("props.severity");
        const [resolution, setResolution] = use("props.resolution");

        if (!severity()) {
          setSeverity("informational");
        }
        if (!resolution()) {
          setResolution("pending");
        }

        return (
          <Components.View
            class={css`flex flex-col items-center justify-start m-0 my-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700 [&_p]:pl-4 [&_blockquote]:pl-4 [&_ol]:pl-4 [&_ul]:pl-4 [&_h1]:pl-4 [&_h2]:pl-4 [&_h3]:pl-4 [&_h4]:pl-4 [&_h5]:pl-4 [&_h6]:pl-4`}
          >
            <Components.Content>
              <Components.Element type="Title">
                <Components.View
                  class={css`flex items-start border-b-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-t-2xl`}
                >
                  <Components.View
                    class={css`mr-1 text-gray-500 dark:text-gray-400 font-bold text-base h-[35px] font-mono min-w-50 px-2 inline-flex items-center`}
                  >
                    Issue
                  </Components.View>
                  <Components.Content allowed={["paragraph"]} />
                </Components.View>
              </Components.Element>
              <Components.Element type="Severity">
                <Components.View
                  class={css`flex items-start border-b-2 border-gray-200 dark:border-gray-700`}
                >
                  <Components.View
                    class={css`text-gray-500 dark:text-gray-400 mr-1 font-bold text-base h-10 font-mono min-w-50 px-2 inline-flex items-center`}
                  >
                    Severity
                  </Components.View>
                  <Components.View class={css`flex items-center`}>
                    <Components.Select
                      bind:value={severity}
                      class="mx-0"
                      options={[
                        { label: "Informational", value: "informational" },
                        { label: "Low", value: "low" },
                        { label: "Medium", value: "medium" },
                        { label: "High", value: "high" },
                        { label: "Governance", value: "governance" },
                      ]}
                    />
                  </Components.View>
                </Components.View>
              </Components.Element>
              <Components.Element type="Description">
                <Components.View
                  class={css`flex items-start border-b-2 py-2 border-gray-200 dark:border-gray-700`}
                >
                  <Components.View
                    class={css`text-gray-500 dark:text-gray-400 mr-1 font-bold text-base h-[35px] font-mono min-w-50 px-2 inline-flex items-center`}
                  >
                    Description
                  </Components.View>
                  <Components.Content />
                </Components.View>
              </Components.Element>
              <Components.Element type="Recommendation">
                <Components.View
                  class={css`flex items-start border-b-2 py-2 border-gray-200 dark:border-gray-700`}
                >
                  <Components.View
                    class={css`text-gray-500 dark:text-gray-400 mr-1 font-bold text-base h-[35px] font-mono min-w-50 px-2 inline-flex items-center`}
                  >
                    Recommendation
                  </Components.View>
                  <Components.Content />
                </Components.View>
              </Components.Element>
              <Components.Element type="Resolution">
                <Components.View
                  class={css`flex items-start py-2 border-gray-200 dark:border-gray-700 rounded-b-2xl`}
                >
                  <Components.View
                    class={css`mr-1 text-base h-[60px] font-mono min-w-50 flex items-start flex-col`}
                  >  
                    <Components.View
                    class={css`text-gray-500 font-bold px-2 dark:text-gray-400`}>
                      Resolution
                    </Components.View>
                    <Components.Element type="ResolutionState">
                      <Components.Select
                        bind:value={resolution}
                        options={[
                          { label: "Pending", value: "pending" },
                          { label: "Acknowledged", value: "acknowledged" },
                          { label: "Partial", value: "partially" },
                          { label: "Resolved", value: "resolved" }
                        ]}
                      />
                    </Components.Element>
                  </Components.View>
                  <Components.Content />
                </Components.View>
              </Components.Element>
            </Components.Content>
          </Components.View>
        );
      }),
    },
  ],
});
