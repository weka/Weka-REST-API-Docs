export default function apiSearchFilterPlugin(system) {
  const h = system.React.createElement;

  function opsFilter(taggedOps, phrase) {
    const needle = phrase.toLowerCase();
    const matches = (value) => typeof value === "string" && value.toLowerCase().includes(needle);
    const opMatches = (op) => matches(op.get("path")) || matches(op.getIn(["operation", "summary"]));
    return taggedOps
      .map((tagObj, tag) => (matches(tag) ? tagObj : tagObj.update("operations", (ops) => ops.filter(opMatches))))
      .filter((tagObj, tag) => matches(tag) || tagObj.get("operations").size > 0);
  }

  function FilterContainer({ specSelectors, layoutSelectors, layoutActions, getComponent }) {
    const filter = layoutSelectors.currentFilter();
    if (filter === false) {
      return null;
    }
    const Col = getComponent("Col");
    const status = specSelectors.loadingStatus();
    const classNames = ["operation-filter-input"];
    if (status === "failed") classNames.push("failed");
    if (status === "loading") classNames.push("loading");
    return h(
      "div",
      { className: "filter-container" },
      h(
        Col,
        { className: "filter wrapper", mobile: 12 },
        h("input", {
          className: classNames.join(" "),
          placeholder: "Search by group heading, path or summary",
          type: "text",
          onChange: (e) => layoutActions.updateFilter(e.target.value),
          value: typeof filter === "string" ? filter : "",
          disabled: status === "loading",
        })
      )
    );
  }

  return { fn: { opsFilter }, components: { FilterContainer } };
}
