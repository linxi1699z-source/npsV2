# `axure-pay-admin-prototype` Skill 草案

更新：正式项目内 skill 已生成在 `skills/axure-pay-admin-prototype/`。后续优先使用该目录；本文只保留为设计记录。

建议：需要创建 skill。原因是你的目标不是一次性页面，而是后续反复用自然语言生成同一风格的后台原型。把规则沉淀成 skill 后，后续只需要说“按支付后台 Axure 风格新增一个退款管理页面”，Codex 就能自动加载这些导航、字体、表格、弹窗和中继器交互规范。

建议安装形态：

```text
axure-pay-admin-prototype/
├── SKILL.md
└── references/
    └── design-rules.md
```

下面是建议的 `SKILL.md` 内容草案。安装时应把完整规范放入 `references/design-rules.md`，也就是当前工作区的 `docs/axure-pay-admin-prototype-guidelines.md`。

```markdown
---
name: axure-pay-admin-prototype
description: Generate or edit payment backend management system prototypes in the user's existing Axure style, including left navigation, search forms, tables, dynamic panels/lightbox dialogs, repeater data interactions, and Axure-compatible RP or HTML implementation guidance. Use when the user asks to create new backend prototype pages, Axure RP implementation plans, or Axure-style HTML matching the provided payment admin prototype.
---

# Axure Pay Admin Prototype

Use this skill to design payment backend management prototypes that match the user's existing Axure prototype style.

## Required Reference

Before designing a page or interaction, read `references/design-rules.md`. It contains the extracted layout, typography, component, dynamic panel, repeater, and Axure compatibility rules.

## Workflow

1. Identify the requested output: Axure implementation spec, Axure-style HTML, or `.rp`.
2. If the user requests `.rp`, confirm whether an editable Axure template or reliable RP generation workflow is available. If not, produce an Axure implementation spec and/or HTML prototype first.
3. Decide navigation placement:
   - Use a first-level nav item for independent business domains.
   - Use a second-level page, page tab, or table action for dependent details/configuration.
4. Build the page using Axure-supported widgets only: text, shapes, input boxes, droplists, checkboxes, tables, dynamic panels, repeaters, trees, lines, images, and hot spots.
5. Specify every dynamic panel state and OnClick action.
6. Specify every repeater field, default row, OnItemLoad binding, add/update/delete/filter action, and related input or dropdown binding.
7. Validate against the checklist in `references/design-rules.md`.

## Critical Style Rules

- Keep the left navigation: `150px` wide, `#F2F2F2` background, tree root `支付中心`.
- Use `PingFang SC` for Chinese business text and `Arial` for English/ID/number-heavy text. Default text size is `13px`.
- Use `#D7D7D7` for borders and table headers. Use white table body rows.
- Search labels are right aligned. Inputs and droplists are usually `200 x 32` and placed to the right of labels.
- Tables default to centered text, `40px` row height, and `#D7D7D7` borders.
- Buttons use gray backgrounds, white text, `5px` radius; modal action buttons are commonly `60 x 30`.
- Use dynamic panels for all dialogs. Show dialogs as lightbox, bring to front, blur radius 4, and always provide close/cancel behavior.
- Use repeaters for mutable lists. Operations must change repeater data, not only static text.

## Interaction Patterns

### Dialog

For a button such as `查看`, `新增`, `编辑`, `启用`, `禁用`, or `导出`:

1. Set the target dynamic panel to the relevant state.
2. Populate fields from the selected row or current form values.
3. Show the panel, bring to front, treat as lightbox.
4. On close, cancel, or successful submit, hide the panel.

### Repeater Add

1. Show the `add` dialog.
2. Validate required fields.
3. Add one row to the repeater with explicit field values.
4. Clear form controls and hide the dialog.

### Repeater Edit

1. Capture the current row key.
2. Write `[[Item.field]]` values into text fields, droplists, and checkboxes.
3. On submit, update the matching repeater row.
4. Hide the dialog.

### Repeater Delete or Disable

1. Show a confirmation dialog.
2. On confirm, delete the row or update its status field.
3. On cancel, hide the dialog without data changes.

### Search and Filter

1. Query reads text field and droplist values.
2. Add or replace repeater filters.
3. Clear removes filters and resets controls.

## Output Format

When returning a prototype design, include:

- Navigation placement and page route.
- Page canvas and main content layout.
- Component inventory with dimensions and alignment.
- Dynamic panel list with states and default visibility.
- Repeater schema, sample data, bindings, and data-changing actions.
- Axure action map for each clickable element.
- HTML generation notes if the user asks for HTML.
- Remaining assumptions only when they affect implementation.
```

## 使用建议

- 现在先把规范确认下来。
- 下一步可把本草案安装为真正 skill，推荐位置为 `~/.codex/skills/axure-pay-admin-prototype`，这样后续 Codex 会自动触发。
- 如果目标是直接生成 `.rp` 文件，需要准备一个可复用的 Axure 模板或确认可用的 RP 生成方式。没有模板时，优先生成 Axure 风格 HTML 和 Axure 实现清单。
