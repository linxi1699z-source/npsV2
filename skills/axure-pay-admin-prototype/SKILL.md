---
name: axure-pay-admin-prototype
description: Generate or edit payment backend management system prototypes in the user's existing Axure style, including left navigation, search forms, text fields with hover/focus/error states, single-select and multi-select dropdowns, tables, dynamic panels/lightbox dialogs, repeater data interactions, and Axure-compatible RP or HTML implementation guidance. Use when the user asks to create new backend prototype pages, Axure RP implementation plans, Axure-style HTML, or reusable prototype interaction rules matching the payment admin prototype.
---

# Axure Pay Admin Prototype

Use this skill to design payment backend management prototypes that match the user's existing Axure prototype style and stay within Axure-supported widgets and interactions.

## Required Reference

Read `references/design-rules.md` before designing a page, interaction, `.rp` implementation spec, or Axure-style HTML. It contains the extracted layout, typography, component, dynamic panel, dropdown, input-state, repeater, and Axure compatibility rules.

## Workflow

1. Identify the requested output: Axure implementation spec, Axure-style HTML, or `.rp`.
2. If the user requests `.rp`, confirm whether an editable Axure template or reliable RP generation workflow is available. If not, produce an Axure implementation spec and/or HTML prototype first.
3. Decide navigation placement:
   - Use a first-level nav item for independent business domains.
   - Use a second-level page, page tab, or table action for dependent details/configuration.
4. Build the page using Axure-supported widgets only: text, shapes, input boxes, droplists, checkboxes, tables, dynamic panels, repeaters, trees, lines, images, and hot spots.
5. Specify every input field state: default, hover, focus, disabled, and error.
6. Specify every date range picker as one trigger field plus a calendar dynamic panel with start/end selection, range highlighting, confirm, and clear actions.
7. Specify every dropdown type:
   - Single-select uses Axure `Droplist`.
   - Multi-select uses a trigger field plus dynamic panel and checkbox list.
8. Specify every dynamic panel state, default visibility, and OnClick action.
9. Specify every repeater field, default row, OnItemLoad binding, add/update/delete/filter action, and related input/dropdown binding.
10. Validate against the checklist in `references/design-rules.md`.

## Critical Rules

- Keep the left navigation: `150px` wide, `#F2F2F2` background, tree root `支付中心`.
- Indent second-level navigation items relative to first-level items; use about `32-40px` from the nav content start or `16-22px` beyond the first-level label start.
- Use a blue bottom line for active first-level and second-level navigation by default: `#1E98D7`, `2-3px` high, and no wider than the navigation label text. Do not use yellow fill unless explicitly matching an old Axure page.
- Use `PingFang SC` for Chinese business text and `Arial` for English/ID/number-heavy text. Default text size is `13px`.
- Use `#D7D7D7` for borders and table headers. Use white table body rows.
- Search labels are right aligned. Inputs and droplist trigger fields are usually `200 x 32` and placed to the right of labels.
- Text fields must include hover and focus border highlighting. Use `#AAAAAA` for hover and `#1E98D7` for focus unless the user provides another style.
- Date ranges use one RangePicker-style trigger with separate start/end text segments, a single hidden value for filtering, and a calendar panel for selecting start/end with continuous selected-range highlighting.
- Tables default to centered text, `40px` row height, and `#D7D7D7` borders.
- List/table containers use the main content width. If table columns are narrower than the container, stretch the table to fill the container; if columns exceed the container, keep the container fixed and show horizontal scrolling inside it.
- Buttons use gray backgrounds, white text, `5px` radius; modal action buttons are commonly `60 x 30`.
- In table/list operation columns, keep view/detail/preview actions as blue text links when appropriate; render edit, enable, disable, pause, submit, and other state-changing actions as gray buttons. Do not include delete actions unless explicitly requested.
- Use dynamic panels for all dialogs. Show dialogs as lightbox, bring to front, blur radius 4, and always provide close/cancel behavior.
- Use repeaters for mutable lists. Operations must change repeater data, not only static text.

## Output Format

When returning a prototype design, include:

- Navigation placement and page route.
- Page canvas and main content layout.
- Component inventory with dimensions, states, and alignment.
- Input and dropdown behavior, including result presentation and bound fields.
- Dynamic panel list with states and default visibility.
- Repeater schema, sample data, bindings, and data-changing actions.
- Axure action map for each clickable element.
- HTML generation notes if the user asks for HTML.
- Remaining assumptions only when they affect implementation.
