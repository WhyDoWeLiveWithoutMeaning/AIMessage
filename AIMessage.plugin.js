/**
 * @name AIMessage
 * @description Adds a button to the text bar that inserts "fart" into the message box when clicked.
 * @version 1.0.0
 * @author Meaning
 * @source https://github.com/your-repo/FartInserter
 * @updateUrl https://github.com/your-repo/FartInserter/FartInserter.plugin.js
 */
const config = {
    info: {
      name: "AIMessage",
      authors: [
        {
          name: "Meaning",
          discord_id: "160506586408812545",
          github_username: "WhyDoWeLiveWithoutMeaning",
        },
      ],
      version: "1.0.0",
      description: "Allows you to connect to the OpenAI API to generate responses for you.",
      github: "https://github.com/your-repo/FartInserter",
      github_raw:
        "https://github.com/your-repo/FartInserter/FartInserter.plugin.js",
    },
    defaultConfig: [],
    changelog: [
      {
        title: "Initial Release",
        type: "added",
        items: ["Basic AI Spielle"],
      },
    ],
  };
  
  const LogoSVG =
    '<svg height="2500" viewBox="-1 -.1 949.1 959.8" width="2474" xmlns="http://www.w3.org/2000/svg"><path d="m925.8 456.3c10.4 23.2 17 48 19.7 73.3 2.6 25.3 1.3 50.9-4.1 75.8-5.3 24.9-14.5 48.8-27.3 70.8-8.4 14.7-18.3 28.5-29.7 41.2-11.3 12.6-23.9 24-37.6 34-13.8 10-28.5 18.4-44.1 25.3-15.5 6.8-31.7 12-48.3 15.4-7.8 24.2-19.4 47.1-34.4 67.7-14.9 20.6-33 38.7-53.6 53.6-20.6 15-43.4 26.6-67.6 34.4-24.2 7.9-49.5 11.8-75 11.8-16.9.1-33.9-1.7-50.5-5.1-16.5-3.5-32.7-8.8-48.2-15.7s-30.2-15.5-43.9-25.5c-13.6-10-26.2-21.5-37.4-34.2-25 5.4-50.6 6.7-75.9 4.1-25.3-2.7-50.1-9.3-73.4-19.7-23.2-10.3-44.7-24.3-63.6-41.4s-35-37.1-47.7-59.1c-8.5-14.7-15.5-30.2-20.8-46.3s-8.8-32.7-10.6-49.6c-1.8-16.8-1.7-33.8.1-50.7 1.8-16.8 5.5-33.4 10.8-49.5-17-18.9-31-40.4-41.4-63.6-10.3-23.3-17-48-19.6-73.3-2.7-25.3-1.3-50.9 4-75.8s14.5-48.8 27.3-70.8c8.4-14.7 18.3-28.6 29.6-41.2s24-24 37.7-34 28.5-18.5 44-25.3c15.6-6.9 31.8-12 48.4-15.4 7.8-24.3 19.4-47.1 34.3-67.7 15-20.6 33.1-38.7 53.7-53.7 20.6-14.9 43.4-26.5 67.6-34.4 24.2-7.8 49.5-11.8 75-11.7 16.9-.1 33.9 1.6 50.5 5.1s32.8 8.7 48.3 15.6c15.5 7 30.2 15.5 43.9 25.5 13.7 10.1 26.3 21.5 37.5 34.2 24.9-5.3 50.5-6.6 75.8-4s50 9.3 73.3 19.6c23.2 10.4 44.7 24.3 63.6 41.4 18.9 17 35 36.9 47.7 59 8.5 14.6 15.5 30.1 20.8 46.3 5.3 16.1 8.9 32.7 10.6 49.6 1.8 16.9 1.8 33.9-.1 50.8-1.8 16.9-5.5 33.5-10.8 49.6 17.1 18.9 31 40.3 41.4 63.6zm-333.2 426.9c21.8-9 41.6-22.3 58.3-39s30-36.5 39-58.4c9-21.8 13.7-45.2 13.7-68.8v-223q-.1-.3-.2-.7-.1-.3-.3-.6-.2-.3-.5-.5-.3-.3-.6-.4l-80.7-46.6v269.4c0 2.7-.4 5.5-1.1 8.1-.7 2.7-1.7 5.2-3.1 7.6s-3 4.6-5 6.5a32.1 32.1 0 0 1 -6.5 5l-191.1 110.3c-1.6 1-4.3 2.4-5.7 3.2 7.9 6.7 16.5 12.6 25.5 17.8 9.1 5.2 18.5 9.6 28.3 13.2 9.8 3.5 19.9 6.2 30.1 8 10.3 1.8 20.7 2.7 31.1 2.7 23.6 0 47-4.7 68.8-13.8zm-455.1-151.4c11.9 20.5 27.6 38.3 46.3 52.7 18.8 14.4 40.1 24.9 62.9 31s46.6 7.7 70 4.6 45.9-10.7 66.4-22.5l193.2-111.5.5-.5q.2-.2.3-.6.2-.3.3-.6v-94l-233.2 134.9c-2.4 1.4-4.9 2.4-7.5 3.2-2.7.7-5.4 1-8.2 1-2.7 0-5.4-.3-8.1-1-2.6-.8-5.2-1.8-7.6-3.2l-191.1-110.4c-1.7-1-4.2-2.5-5.6-3.4-1.8 10.3-2.7 20.7-2.7 31.1s1 20.8 2.8 31.1c1.8 10.2 4.6 20.3 8.1 30.1 3.6 9.8 8 19.2 13.2 28.2zm-50.2-417c-11.8 20.5-19.4 43.1-22.5 66.5s-1.5 47.1 4.6 70c6.1 22.8 16.6 44.1 31 62.9 14.4 18.7 32.3 34.4 52.7 46.2l193.1 111.6q.3.1.7.2h.7q.4 0 .7-.2.3-.1.6-.3l81-46.8-233.2-134.6c-2.3-1.4-4.5-3.1-6.5-5a32.1 32.1 0 0 1 -5-6.5c-1.3-2.4-2.4-4.9-3.1-7.6-.7-2.6-1.1-5.3-1-8.1v-227.1c-9.8 3.6-19.3 8-28.3 13.2-9 5.3-17.5 11.3-25.5 18-7.9 6.7-15.3 14.1-22 22.1-6.7 7.9-12.6 16.5-17.8 25.5zm663.3 154.4c2.4 1.4 4.6 3 6.6 5 1.9 1.9 3.6 4.1 5 6.5 1.3 2.4 2.4 5 3.1 7.6.6 2.7 1 5.4.9 8.2v227.1c32.1-11.8 60.1-32.5 80.8-59.7 20.8-27.2 33.3-59.7 36.2-93.7s-3.9-68.2-19.7-98.5-39.9-55.5-69.5-72.5l-193.1-111.6q-.3-.1-.7-.2h-.7q-.3.1-.7.2-.3.1-.6.3l-80.6 46.6 233.2 134.7zm80.5-121h-.1v.1zm-.1-.1c5.8-33.6 1.9-68.2-11.3-99.7-13.1-31.5-35-58.6-63-78.2-28-19.5-61-30.7-95.1-32.2-34.2-1.4-68 6.9-97.6 23.9l-193.1 111.5q-.3.2-.5.5l-.4.6q-.1.3-.2.7-.1.3-.1.7v93.2l233.2-134.7c2.4-1.4 5-2.4 7.6-3.2 2.7-.7 5.4-1 8.1-1 2.8 0 5.5.3 8.2 1 2.6.8 5.1 1.8 7.5 3.2l191.1 110.4c1.7 1 4.2 2.4 5.6 3.3zm-505.3-103.2c0-2.7.4-5.4 1.1-8.1.7-2.6 1.7-5.2 3.1-7.6 1.4-2.3 3-4.5 5-6.5 1.9-1.9 4.1-3.6 6.5-4.9l191.1-110.3c1.8-1.1 4.3-2.5 5.7-3.2-26.2-21.9-58.2-35.9-92.1-40.2-33.9-4.4-68.3 1-99.2 15.5-31 14.5-57.2 37.6-75.5 66.4-18.3 28.9-28 62.3-28 96.5v223q.1.4.2.7.1.3.3.6.2.3.5.6.2.2.6.4l80.7 46.6zm43.8 294.7 103.9 60 103.9-60v-119.9l-103.8-60-103.9 60z"/></svg>';
  
  module.exports = !global.ZeresPluginLibrary
    ? class {
        constructor() {
          this._config = config;
        }
        load() {
          BdApi.showConfirmationModal(
            "Library Missing",
            `The library plugin needed for ${config.info.name} is missing. Please click Download Now to install it.`,
            {
              confirmText: "Download Now",
              cancelText: "Cancel",
              onConfirm: () => {
                require("request").get(
                  "https://betterdiscord.app/gh-redirect?id=9",
                  async (err, resp, body) => {
                    if (err)
                      return require("electron").shell.openExternal(
                        "https://betterdiscord.app/Download?id=9"
                      );
                    if (resp.statusCode === 302) {
                      require("request").get(
                        resp.headers.location,
                        async (error, response, content) => {
                          if (error)
                            return require("electron").shell.openExternal(
                              "https://betterdiscord.app/Download?id=9"
                            );
                          await new Promise((r) =>
                            require("fs").writeFile(
                              require("path").join(
                                BdApi.Plugins.folder,
                                "0PluginLibrary.plugin.js"
                              ),
                              content,
                              r
                            )
                          );
                        }
                      );
                    } else {
                      await new Promise((r) =>
                        require("fs").writeFile(
                          require("path").join(
                            BdApi.Plugins.folder,
                            "0PluginLibrary.plugin.js"
                          ),
                          body,
                          r
                        )
                      );
                    }
                  }
                );
              },
            }
          );
        }
        start() {}
        stop() {}
      }
    : (([Plugin, Api]) => {
        const { DiscordSelectors, ReactTools, Patcher, Utilities } = Api;
        const { React, injectCSS, clearCSS, Webpack } = BdApi;
  
        const Tooltip = BdApi.Components.Tooltip;
        const ChannelTextArea = Webpack.getModule((m) =>
          m.type?.render?.toString?.().includes("CHANNEL_TEXT_AREA")
        );
  
        const Styles = `
  .ai-button {
      background-color: transparent;
      border: none;
      padding: 4px;
      margin: 0;
      cursor: pointer;
      color: var(--interactive-normal);
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      transition: background-color 0.1s ease;
  }
  
  .ai-button:hover {
      color: var(--interactive-active);
      background-color: var(--background-modifier-hover);
  }
  
  .ai-button svg {
      width: 22px;
      height: 22px;
      fill: currentColor;
  }
  
  [class*=innerDisabled] .ai-button {
      display: none;
  }
  
  .ai-modal {
      padding: 1rem;
  }
  .ai-modal-content {
      margin: 1rem 0;
  }
  .ai-modal-textarea {
      width: 100%;
      min-height: 80px;
      margin: 1rem 0;
      padding: 0.5rem;
      background: var(--input-background);
      border: 1px solid var(--input-border);
      border-radius: 3px;
      color: var(--text-normal);
      font-size: 16px;
      resize: vertical;
  }
  .ai-modal-textarea:focus {
      border-color: var(--text-link);
      outline: none;
  }
  .ai-modal-select {
      width: 100%;
      padding: 8px;
      margin-bottom: 1rem;
      background: var(--input-background);
      border: 1px solid var(--input-border);
      border-radius: 3px;
      color: var(--text-normal);
      font-size: 14px;
  }
  
  .ai-modal-select:focus {
      border-color: var(--text-link);
      outline: none;
  }
  
  .ai-modal-checkbox-label {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;
      color: var(--text-normal);
      font-size: 14px;
      cursor: pointer;
  }
  
  .ai-modal-checkbox-container {
      margin-bottom: 16px;
  }
  
  .ai-modal-number-container {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 8px;
      margin-left: 24px;
  }
  
  .ai-modal-number-label {
      color: var(--text-normal);
      font-size: 14px;
  }
  
  .ai-modal-number {
      width: 60px;
      padding: 4px 8px;
      background: var(--input-background);
      border: 1px solid var(--input-border);
      border-radius: 3px;
      color: var(--text-normal);
      font-size: 14px;
  }
  
  .ai-modal-number:focus {
      border-color: var(--text-link);
      outline: none;
  }
  
  .ai-modal-checkbox {
      appearance: none;
      width: 16px;
      height: 16px;
      border: 2px solid var(--interactive-normal);
      border-radius: 3px;
      background-color: var(--background-secondary);
      cursor: pointer;
      position: relative;
      transition: all 0.2s ease;
  }
  
  .ai-modal-checkbox:checked {
      background-color: var(--brand-experiment);
      border-color: var(--brand-experiment);
  }
  
  .ai-modal-checkbox:checked::after {
      content: "";
      position: absolute;
      left: 4px;
      top: 1px;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
  }
  
  .ai-modal-checkbox:hover {
      border-color: var(--interactive-hover);
  }
  
  .ai-modal-checkbox:focus {
      border-color: var(--text-link);
      outline: none;
  }
  `;
  
        return class FartInserter extends Plugin {
          constructor() {
              super();
              this.models = [
                  { id: "gpt-4o-mini", name: "GPT-4o Mini" },
                  { id: "gpt-4o", name: "GPT-4o" },
                  { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo" }
              ];
              this.selectedModel = "gpt-4o-mini";
          }
  
          onStart() {
            injectCSS("OpenAI-Styles", Styles);
  
            Patcher.after(ChannelTextArea.type, "render", (_, __, ret) => {
              const chatBar = Utilities.findInReactTree(
                ret,
                (n) =>
                  Array.isArray(n?.children) &&
                  n.children.some((c) =>
                    c?.props?.className?.startsWith("attachButton")
                  )
              )?.children;
              if (!chatBar) {
                console.error(
                  "PreviewMessage: Couldn't find ChatBar component in React tree"
                );
                return;
              }
  
              const buttons = Utilities.findInReactTree(
                chatBar,
                (n) => n?.props?.showCharacterCount
              );
              if (buttons?.props.disabled) return;
  
              chatBar.splice(-1, 0, this.renderButton());
            });
          }
  
          onStop() {
            Patcher.unpatchAll();
            clearCSS("OpenAI-Styles");
          }
  
          async getChannelMessages(channelId, limit = 50) {
              const MessageStore = BdApi.findModuleByProps("getMessages");
              const messages = MessageStore.getMessages(channelId)
                .toArray()
                .slice(-limit)
                .map((m) => {
                  return {
                    timestamp: m.timestamp,
                    author: m.author.username,
                    content: m.content,
                  };
                });
              return messages;
            }
  
            getSettingsPanel() {
              const apiKey = BdApi.Data.load("AIMessage", "apiKey") || "";
          
              return BdApi.React.createElement(
                "div",
                {
                  style: { padding: "10px" },
                },
                [
                  BdApi.React.createElement("h2", null, "OpenAI Settings"),
                  BdApi.React.createElement("input", {
                    type: "text",
                    placeholder: "Enter OpenAI API Key",
                    value: apiKey,
                    onChange: (e) =>
                      BdApi.Data.save("AIMessage", "apiKey", e.target.value),
                    style: {
                      width: "100%",
                      padding: "8px",
                      marginTop: "10px",
                    },
                  }),
                ]
              );
            }
  
            getCurrentUser() {
              const UserStore = BdApi.findModuleByProps("getCurrentUser");
              return UserStore.getCurrentUser().username;
            }
  
          async sendToOpenAI(prompt, model, history = []) {
              const apiKey = BdApi.Data.load("AIMessage", "apiKey");
              const user = this.getCurrentUser();
          
              if (!apiKey) {
                BdApi.alert("Error", "Please set your OpenAI API key in settings");
                return null;
              }
          
              try {
                // Format history messages with roles
                const historyMessages = history.map((msg) => ({
                  role: msg.author === user ? "assistant" : "user",
                  content: msg.content,
                }));
          
                // Build messages array with system prompt, history, and current prompt
                const messages = [
                  {
                    role: "system",
                    content: `You are ${user}, a human being. When reviewing a chat history or responding to the latest message, always assume the role of ${user} and maintain their voice, tone, and grammatical patterns.
          
                    Guidelines:
          
                    Respond only to what has been explicitly asked or stated.
                    Avoid creating new topics or offering unsolicited information.
                    Do not "hallucinate" information—base your responses solely on the context provided.
                    Maintain consistency and coherence with the user's style and intent.
                    You must always respond as ${user}, never as yourself or any other entity.
          
                    Always respond in plain text, without any formatting or special characters as if you are a human being.
                    You do not need a timestamp or username in your response.`,
                  },
                  ...historyMessages,
                  ...(history.length === 0 ? [{ role: "user", content: prompt }] : []),
                ];
  
                console.log(messages);
          
                const response = await fetch(
                  "https://api.openai.com/v1/chat/completions",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${apiKey}`,
                    },
                    body: JSON.stringify({
                      model: model,
                      messages: messages,
                      temperature: 0.7,
                    }),
                  }
                );
          
                const data = await response.json();
                return data.choices[0].message.content;
              } catch (error) {
                console.error("OpenAI API Error:", error);
                BdApi.alert("Error", "Failed to get response from OpenAI");
                return null;
              }
            }
  
          renderButton() {
            return React.createElement(Tooltip, {
              text: "Generate AI Message",
              children: (p) =>
                React.createElement(
                  "div",
                  {
                    style: {
                      margin: "auto",
                    },
                  },
                  React.createElement(
                    "button",
                    {
                      ...p,
                      className: "ai-button",
                      onClick: () => {
                        this.showModal();
                      },
                    },
                    React.createElement("div", {
                      dangerouslySetInnerHTML: { __html: LogoSVG },
                      style: { width: "24px", height: "24px" },
                    })
                  )
                ),
            });
          }
  
          async insertTextIntoArea(text) {
            const textarea = document.querySelector(
              DiscordSelectors.Textarea.textArea
            );
            if (!textarea) return;
  
            if (textarea.tagName === "TEXTAREA") {
              // Handle <textarea>
              return this.oldInsertText(textarea, text);
            }
  
            // Handle Slate Editor
            const slateNode = ReactTools.getOwnerInstance(textarea);
            const slate = slateNode?.ref?.current?.getSlateEditor();
            if (!slate) return; // Bail out if no Slate editor found
  
            const selection = slate.selection; // Get current selection/cursor
            slate.apply({
              type: "insert_text",
              text: text,
              path: selection.anchor.path,
              offset: selection.anchor.offset,
            });
  
            slateNode.focus(); // Ensure the editor remains focused
          }
  
          oldInsertText(textarea, text) {
            const currentValue = textarea.value;
            const cursorPosition = textarea.selectionStart; // Current cursor position
  
            // Insert text at cursor position
            textarea.value =
              currentValue.slice(0, cursorPosition) +
              text +
              currentValue.slice(cursorPosition);
  
            // Update cursor position
            textarea.selectionStart = textarea.selectionEnd =
              cursorPosition + text.length;
  
            textarea.focus(); // Refocus the textarea
          }
  
          getCurrentChannelId() {
              const ChannelStore = BdApi.findModuleByProps("getChannelId", "getCurrentlySelectedChannelId");
              return ChannelStore.getChannelId();
          }
  
          showModal() {
              BdApi.showConfirmationModal(
                "AI Text Generator",
                React.createElement(
                  "div",
                  { className: "ai-modal" },
                  [
                      React.createElement(
                          "select",
                          {
                              className: "ai-modal-select",
                              onChange: (e) => this.selectedModel = e.target.value,
                              defaultValue: this.selectedModel
                          },
                          this.models.map(model =>
                              React.createElement(
                                  "option",
                                  {
                                      key: model.id,
                                      value: model.id
                                  },
                                  model.name
                              )
                          )
                      ),
                      React.createElement(
                          "div",
                          { className: "ai-modal-checkbox-container" },
                          [
                              React.createElement(
                                  "label",
                                  { className: "ai-modal-checkbox-label" },
                                  [
                                      React.createElement("input", {
                                          type: "checkbox",
                                          className: "ai-modal-checkbox",
                                          onChange: (e) => {
                                              this.useLastMessage = e.target.checked;
                                              if (this.textarea) {
                                                  this.textarea.disabled = e.target.checked;
                                              }
                                          }
                                      }),
                                      "Generate a Response to the Last Message"
                                  ]
                              ),
                              React.createElement(
                                  "div",
                                  { className: "ai-modal-number-container" },
                                  [
                                      React.createElement(
                                          "span",
                                          { className: "ai-modal-number-label" },
                                          "Messages to look back:"
                                      ),
                                      React.createElement("input", {
                                          type: "number",
                                          className: "ai-modal-number",
                                          min: "1",
                                          max: "100",
                                          defaultValue: "50",
                                          onChange: (e) => this.messageLimit = parseInt(e.target.value)
                                      })
                                  ]
                              )
                          ]
                      ),
                      React.createElement(
                      "div",
                      { className: "ai-modal-content" },
                      React.createElement("textarea", {
                          className: "ai-modal-textarea",
                          placeholder: "Enter your prompt here...",
                          ref: (textarea) => (this.textarea = textarea),
                      })
                      ),
                  ]
                ),
                {
                  confirmText: "Generate",
                  cancelText: "Cancel",
                  onConfirm: () => {
                      if (this.useLastMessage) {
                          const channelId = this.getCurrentChannelId();
                          this.getChannelMessages(channelId, this.messageLimit).then((history) => {
                              const lastMessage = history[history.length - 1];
                              const implicitPrompt = `${lastMessage.content}`;
                
                              this.sendToOpenAI(implicitPrompt, this.selectedModel, history).then((response) => {
                                if (response) {
                                  this.insertTextIntoArea(response);
                                  BdApi.showToast("Response generated!", { type: "success" });
                                } else {
                                  BdApi.showToast("Failed to generate response", {
                                    type: "error",
                                  });
                                }
                              });
                            });
                      } else {
                          this.sendToOpenAI(this.textarea.value, this.selectedModel).then((response) => {
                              if (response) {
                                  this.insertTextIntoArea(response);
                                  BdApi.showToast("Response generated!", { type: "success" });
                              } else {
                                  BdApi.showToast("Failed to generate response", {
                                      type: "error",
                                    });
                              }
                          });
                      }
                  },
                }
              );
            }
        };
      })(global.ZeresPluginLibrary.buildPlugin(config));
  