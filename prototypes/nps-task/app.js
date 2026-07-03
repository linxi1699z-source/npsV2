const tasks = [
  {
    task_id: "10001",
    task_name: "全局NPS6月任务",
    task_status: "初始状态",
    task_scene: "睡眠",
    audience_link_text: "查看",
    app_client: "APP",
    delivery_version: "Android > V4.2, iOS > V4.2",
    start_time: "2026-06-28",
    end_time: "2026-07-20",
    template_name: "睡眠NPS模板",
    plan_id: "10001",
    plan_name: "睡眠 NPS 计划",
    total_users: "100,000",
    actual_delivery_users: "0",
    exposed_users: "0",
  },
  {
    task_id: "10002",
    task_name: "OSA NPS投放任务",
    task_status: "投放中",
    task_scene: "OSA",
    audience_link_text: "查看",
    app_client: "APP",
    delivery_version: "Android > V4.3, iOS > V4.3",
    start_time: "2026-06-20",
    end_time: "2026-07-10",
    template_name: "OSA问卷模板",
    plan_id: "10002",
    plan_name: "OSA 体验计划",
    total_users: "80,000",
    actual_delivery_users: "42,000",
    exposed_users: "21,500",
  },
  {
    task_id: "10003",
    task_name: "血压NPS7月任务",
    task_status: "投放完成",
    task_scene: "血压",
    audience_link_text: "查看",
    app_client: "APP",
    delivery_version: "Android > V4.2",
    start_time: "2026-06-01",
    end_time: "2026-06-30",
    template_name: "血压NPS模板",
    plan_id: "10003",
    plan_name: "血压 NPS 计划",
    total_users: "50,000",
    actual_delivery_users: "50,000",
    exposed_users: "38,600",
  },
  {
    task_id: "10004",
    task_name: "AI Partner 满意度任务",
    task_status: "投放异常",
    task_scene: "AI Partner",
    audience_link_text: "查看",
    app_client: "Web",
    delivery_version: "Web > V2.1",
    start_time: "2026-06-15",
    end_time: "2026-07-15",
    template_name: "AI Partner模板",
    plan_id: "10004",
    plan_name: "AI Partner 计划",
    total_users: "30,000",
    actual_delivery_users: "8,200",
    exposed_users: "3,900",
  },
  {
    task_id: "10005",
    task_name: "生理周期NPS任务",
    task_status: "暂停",
    task_scene: "生理",
    audience_link_text: "查看",
    app_client: "APP",
    delivery_version: "iOS > V4.2",
    start_time: "2026-06-10",
    end_time: "2026-07-05",
    template_name: "生理NPS模板",
    plan_id: "10005",
    plan_name: "生理 NPS 计划",
    total_users: "60,000",
    actual_delivery_users: "12,000",
    exposed_users: "6,100",
  },
  {
    task_id: "10006",
    task_name: "计划模块NPS任务",
    task_status: "初始状态",
    task_scene: "计划",
    audience_link_text: "查看",
    app_client: "APP",
    delivery_version: "Android > V4.4, iOS > V4.4",
    start_time: "2026-07-01",
    end_time: "2026-07-31",
    template_name: "计划NPS模板",
    plan_id: "10006",
    plan_name: "计划 NPS 计划",
    total_users: "90,000",
    actual_delivery_users: "0",
    exposed_users: "0",
  },
];

const plans = [
  { plan_id: "10001", plan_name: "睡眠 NPS 计划", plan_status: "启用" },
  { plan_id: "10002", plan_name: "OSA 体验计划", plan_status: "启用" },
  { plan_id: "10003", plan_name: "血压 NPS 计划", plan_status: "启用" },
  { plan_id: "10004", plan_name: "AI Partner 计划", plan_status: "启用" },
  { plan_id: "10005", plan_name: "生理 NPS 计划", plan_status: "启用" },
  { plan_id: "10006", plan_name: "计划 NPS 计划", plan_status: "启用" },
];

const audienceUsers = [
  { task_id: "10001", ringconn_id: "RC10001001", country: "中国", registered_at: "2024-11-18", user_flag: "老用户", delivery_result: "未下发" },
  { task_id: "10001", ringconn_id: "RC10001002", country: "美国", registered_at: "2025-02-07", user_flag: "新用户", delivery_result: "已下发" },
  { task_id: "10001", ringconn_id: "RC10001003", country: "德国", registered_at: "2023-09-26", user_flag: "波动用户", delivery_result: "已提交" },
  { task_id: "10002", ringconn_id: "RC10002001", country: "日本", registered_at: "2024-08-11", user_flag: "老用户", delivery_result: "已下发" },
  { task_id: "10002", ringconn_id: "RC10002002", country: "中国", registered_at: "2025-12-03", user_flag: "新用户", delivery_result: "未下发" },
  { task_id: "10002", ringconn_id: "RC10002003", country: "法国", registered_at: "2024-03-14", user_flag: "波动用户", delivery_result: "已提交" },
  { task_id: "10003", ringconn_id: "RC10003001", country: "美国", registered_at: "2023-07-09", user_flag: "老用户", delivery_result: "已提交" },
  { task_id: "10003", ringconn_id: "RC10003002", country: "加拿大", registered_at: "2024-10-21", user_flag: "波动用户", delivery_result: "已下发" },
  { task_id: "10003", ringconn_id: "RC10003003", country: "中国", registered_at: "2026-01-06", user_flag: "新用户", delivery_result: "已提交" },
  { task_id: "10004", ringconn_id: "RC10004001", country: "英国", registered_at: "2025-04-02", user_flag: "新用户", delivery_result: "未下发" },
  { task_id: "10004", ringconn_id: "RC10004002", country: "德国", registered_at: "2024-12-19", user_flag: "波动用户", delivery_result: "已下发" },
  { task_id: "10004", ringconn_id: "RC10004003", country: "美国", registered_at: "2022-06-30", user_flag: "老用户", delivery_result: "未下发" },
  { task_id: "10005", ringconn_id: "RC10005001", country: "中国", registered_at: "2024-05-12", user_flag: "老用户", delivery_result: "已下发" },
  { task_id: "10005", ringconn_id: "RC10005002", country: "日本", registered_at: "2025-08-24", user_flag: "新用户", delivery_result: "未下发" },
  { task_id: "10005", ringconn_id: "RC10005003", country: "澳大利亚", registered_at: "2023-11-05", user_flag: "波动用户", delivery_result: "已提交" },
  { task_id: "10006", ringconn_id: "RC10006001", country: "中国", registered_at: "2025-01-16", user_flag: "老用户", delivery_result: "未下发" },
  { task_id: "10006", ringconn_id: "RC10006002", country: "美国", registered_at: "2026-02-09", user_flag: "新用户", delivery_result: "未下发" },
  { task_id: "10006", ringconn_id: "RC10006003", country: "新加坡", registered_at: "2024-09-17", user_flag: "波动用户", delivery_result: "已下发" },
];

const npsTemplates = [
  {
    template_id: "10005",
    template_name: "全局 NPS 调查问卷",
    template_status: "有效",
    channel: "APP, WEB",
    scene: "全局",
    raw_questionnaire_type: "弹窗问卷(APP功能)",
    questionnaire_type: "弹窗问卷(APP功能)",
    detail_text: "查看",
    creator: "谢敏",
    updated_at: "2026-06-23 16:30",
    min_version: "Android > V4.2, iOS > V4.2",
    questions: [
      { type: "评分(全局)", title: "您愿意向朋友推荐 RingConn 吗？", subtitle: "1=非常不认可，10=非常认可", options: "1-10" },
      { type: "多选题", title: "影响您评分的主要原因是什么？", subtitle: "", options: "睡眠数据, 佩戴舒适度, App 体验, 其他" },
    ],
  },
  {
    template_id: "10004",
    template_name: "UI NPS 调查问卷",
    template_status: "有效",
    channel: "APP",
    scene: "全局",
    raw_questionnaire_type: "弹窗问卷(设计/用研)",
    questionnaire_type: "弹窗问卷(设计/用研)",
    detail_text: "查看",
    creator: "谢敏",
    updated_at: "2026-06-23 15:40",
    min_version: "Android > V4.2, iOS > V4.2",
    questions: [
      { type: "评分(全局)", title: "您对当前 UI 体验满意吗？", subtitle: "", options: "1-10" },
      { type: "开放题", title: "您希望我们优先优化哪些界面？", subtitle: "", options: "500 字符" },
    ],
  },
  {
    template_id: "10003",
    template_name: "睡眠 NPS 调查问卷",
    template_status: "有效",
    channel: "APP",
    scene: "睡眠",
    raw_questionnaire_type: "功能问卷",
    questionnaire_type: "功能问卷",
    detail_text: "查看",
    creator: "谢敏",
    updated_at: "2026-06-23 14:10",
    min_version: "Android > V4.2, iOS > V4.2",
    questions: [
      { type: "评分(普通)", title: "您对睡眠分析结果满意吗？", subtitle: "", options: "1-10" },
    ],
  },
  {
    template_id: "10002",
    template_name: "运动 NPS 调查问卷",
    template_status: "有效",
    channel: "APP",
    scene: "运动",
    raw_questionnaire_type: "功能问卷",
    questionnaire_type: "功能问卷",
    detail_text: "查看",
    creator: "谢敏",
    updated_at: "2026-06-23 11:20",
    min_version: "Android > V4.1, iOS > V4.1",
    questions: [
      { type: "单选题", title: "您最常查看哪类运动数据？", subtitle: "", options: "步数, 卡路里, 活动时长, 其他" },
    ],
  },
  {
    template_id: "10001",
    template_name: "NPS分组完整问卷",
    template_status: "有效",
    channel: "APP",
    scene: "全局",
    raw_questionnaire_type: "分组问卷",
    questionnaire_type: "分组问卷",
    detail_text: "查看",
    creator: "谢敏",
    updated_at: "2026-06-23 10:00",
    min_version: "Android > V4.0, iOS > V4.0",
    questions: [
      { type: "评分(普通)", title: "您对整体功能体验满意吗？", subtitle: "", options: "1-10" },
      { type: "多选题", title: "请选择您关注的功能分组", subtitle: "", options: "睡眠, 计划, 健康画像, AI Partner" },
    ],
  },
  {
    template_id: "10000",
    template_name: "*******",
    template_status: "无效",
    channel: "APP",
    scene: "*******",
    raw_questionnaire_type: "功能问卷",
    questionnaire_type: "功能问卷",
    detail_text: "查看",
    creator: "谢敏",
    updated_at: "2026-06-23 09:10",
    min_version: "-",
    questions: [],
  },
];

const templates = [
  ...npsTemplates.map((template) => template.template_name),
  "睡眠NPS模板",
  "OSA问卷模板",
  "血压NPS模板",
  "AI Partner模板",
  "生理NPS模板",
  "计划NPS模板",
  "全局NPS模板",
].filter((template, index, source) => source.indexOf(template) === index);

let filteredTasks = [...tasks];
let filteredTemplates = [...npsTemplates];
let selectedPauseTaskId = null;
let selectedTemplateStatusId = null;
let selectedTemplateStatusAction = "";
let formMode = "add";
let currentAudienceTaskId = "";
let filteredAudienceUsers = [...audienceUsers];
let audienceUploadedFileNames = [];
let templateFormMode = "add";
let templateStep = 1;
let templateQuestions = [];
let savedRichTextRange = null;

const taskRows = document.getElementById("taskRows");
const audienceRows = document.getElementById("audienceRows");
const templateRows = document.getElementById("templateRows");
const rowCount = document.getElementById("rowCount");
const audienceRowCount = document.getElementById("audienceRowCount");
const templateRowCount = document.getElementById("templateRowCount");
const templateNav = document.getElementById("templateNav");
const taskNav = document.getElementById("taskNav");
const taskName = document.getElementById("taskName");
const taskScene = document.getElementById("taskScene");
const taskStatus = document.getElementById("taskStatus");
const taskDateRange = document.getElementById("taskDateRange");
const audienceRingconnIdSearch = document.getElementById("audienceRingconnIdSearch");
const templateNameSearch = document.getElementById("templateNameSearch");
const templateStatusSearch = document.getElementById("templateStatusSearch");
const templateSceneSearch = document.getElementById("templateSceneSearch");
const dateError = document.getElementById("dateError");
const datePanel = document.getElementById("datePanel");
const rangePicker = document.getElementById("rangePicker");
const rangeStartText = document.getElementById("rangeStartText");
const rangeEndText = document.getElementById("rangeEndText");
const leftCalendarGrid = document.getElementById("leftCalendarGrid");
const rightCalendarGrid = document.getElementById("rightCalendarGrid");
const leftCalendarTitle = document.getElementById("leftCalendarTitle");
const rightCalendarTitle = document.getElementById("rightCalendarTitle");
const pauseLightbox = document.getElementById("pauseLightbox");
const planLightbox = document.getElementById("planLightbox");
const templateStatusLightbox = document.getElementById("templateStatusLightbox");
const templateStatusConfirmText = document.getElementById("templateStatusConfirmText");
const templateDetailLightbox = document.getElementById("templateDetailLightbox");
const templateDetailBody = document.getElementById("templateDetailBody");
const toast = document.getElementById("toast");
const formFields = {
  editingTaskId: document.getElementById("editingTaskId"),
  taskName: document.getElementById("formTaskName"),
  planName: document.getElementById("formPlanName"),
  taskScene: document.getElementById("formTaskScene"),
  startTime: document.getElementById("formStartTime"),
  startDate: document.getElementById("formStartDate"),
  startHour: document.getElementById("formStartHour"),
  endTime: document.getElementById("formEndTime"),
  endDate: document.getElementById("formEndDate"),
  endHour: document.getElementById("formEndHour"),
  appTrigger: document.getElementById("appClientTrigger"),
  appPanel: document.getElementById("appClientPanel"),
  appClientApp: document.getElementById("appClientApp"),
  appClientWeb: document.getElementById("appClientWeb"),
  androidStart: document.getElementById("androidVersionStart"),
  androidEnd: document.getElementById("androidVersionEnd"),
  iosStart: document.getElementById("iosVersionStart"),
  iosEnd: document.getElementById("iosVersionEnd"),
  templateName: document.getElementById("formTemplateName"),
  audienceFile: document.getElementById("audienceFile"),
  audienceFileList: document.getElementById("audienceFileList"),
  newPlanName: document.getElementById("newPlanName"),
};
const templateFormFields = {
  editingTemplateId: document.getElementById("editingTemplateId"),
  templateTitle: document.getElementById("formTemplateTitle"),
  scene: document.getElementById("formTemplateScene"),
  questionnaireType: document.getElementById("formQuestionnaireType"),
  channelTrigger: document.getElementById("templateChannelTrigger"),
  channelPanel: document.getElementById("templateChannelPanel"),
  channelApp: document.getElementById("templateChannelApp"),
  channelWeb: document.getElementById("templateChannelWeb"),
  androidVersion: document.getElementById("templateAndroidVersion"),
  androidVersionEnd: document.getElementById("templateAndroidVersionEnd"),
  iosVersion: document.getElementById("templateIosVersion"),
  iosVersionEnd: document.getElementById("templateIosVersionEnd"),
  bannerTitle: document.getElementById("templateBannerTitle"),
  bannerSubtitle: document.getElementById("templateBannerSubtitle"),
  bannerButton: document.getElementById("templateBannerButton"),
  linkedTrigger: document.getElementById("linkedQuestionnaireTrigger"),
  linked: document.getElementById("linkedQuestionnaireTrigger"),
  linkedPanel: document.getElementById("linkedQuestionnairePanel"),
  linkedFull: document.getElementById("linkedQuestionnaireFull"),
  linkedGroup2: document.getElementById("linkedQuestionnaireGroup2"),
  linkedSurvey1: document.getElementById("linkedQuestionnaireSurvey1"),
  linkedSurvey2: document.getElementById("linkedQuestionnaireSurvey2"),
  popupCopy: document.getElementById("popupCopy"),
  questionnaireDescription: document.getElementById("questionnaireDescription"),
  questionnaireDescriptionCount: document.getElementById("questionnaireDescriptionCount"),
  questionnaireRemark: document.getElementById("questionnaireRemark"),
  questionnaireTitle: document.getElementById("questionnaireTitle"),
  groupCount: document.getElementById("groupCount"),
  questionRepeater: document.getElementById("questionRepeater"),
};
const formErrors = {
  taskName: document.getElementById("formTaskNameError"),
  planName: document.getElementById("formPlanNameError"),
  taskScene: document.getElementById("formTaskSceneError"),
  startTime: document.getElementById("formStartTimeError"),
  endTime: document.getElementById("formEndTimeError"),
  appClient: document.getElementById("formAppClientError"),
  version: document.getElementById("formVersionError"),
  templateName: document.getElementById("formTemplateNameError"),
  newPlanName: document.getElementById("newPlanNameError"),
};
const templateFormErrors = {
  templateTitle: document.getElementById("formTemplateTitleError"),
  scene: document.getElementById("formTemplateSceneError"),
  questionnaireType: document.getElementById("formQuestionnaireTypeError"),
  channel: document.getElementById("formTemplateChannelError"),
  bannerTitle: document.getElementById("formTemplateBannerTitleError"),
  bannerSubtitle: document.getElementById("formTemplateBannerSubtitleError"),
  bannerButton: document.getElementById("formTemplateBannerButtonError"),
  linked: document.getElementById("formLinkedQuestionnaireError"),
  version: document.getElementById("formTemplateVersionError"),
  questionnaireTitle: document.getElementById("formQuestionnaireTitleError"),
  questionnaireDescription: document.getElementById("formQuestionnaireDescriptionError"),
  groupCount: document.getElementById("formGroupCountError"),
};

let calendarMonth = new Date(2026, 5, 1);
let draftStart = null;
let draftEnd = null;
const defaultCalendarMonth = new Date(2026, 5, 1);

function canPause(task) {
  return task.task_status === "初始状态" || task.task_status === "投放中";
}

function escapeText(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[char]);
}

function sortTasksByIdDesc(rows) {
  return [...rows].sort((first, second) => Number(second.task_id) - Number(first.task_id));
}

function sortPlansByIdDesc(rows) {
  return [...rows].sort((first, second) => Number(second.plan_id) - Number(first.plan_id));
}

function sortTemplatesByIdDesc(rows) {
  return [...rows].sort((first, second) => Number(second.template_id) - Number(first.template_id));
}

function getNextId(rows, field) {
  return String(Math.max(...rows.map((item) => Number(item[field])), 10000) + 1);
}

function padNumber(value) {
  return String(value).padStart(2, "0");
}

function formatDate(date) {
  return `${date.getFullYear()}-${padNumber(date.getMonth() + 1)}-${padNumber(date.getDate())}`;
}

function formatDateMinute(date) {
  return `${formatDate(date)} ${padNumber(date.getHours())}:${padNumber(date.getMinutes())}`;
}

function getCurrentHour() {
  const now = new Date();
  now.setMinutes(0, 0, 0);
  return now;
}

function populateHourOptions(selectElement) {
  selectElement.innerHTML = [
    '<option value="">请选择小时</option>',
    ...Array.from({ length: 24 }, (_, index) => {
      const hour = padNumber(index);
      return `<option value="${hour}">${hour}时</option>`;
    }),
  ].join("");
}

function formatDateHour(dateValue, hourValue) {
  if (!dateValue || !hourValue) return "";
  return `${dateValue} ${hourValue}`;
}

function parseDateHour(dateValue, hourValue) {
  if (!dateValue || !hourValue) return null;
  const date = new Date(`${dateValue}T${hourValue}:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function setDateHourValue(dateField, hourField, value) {
  dateField.value = "";
  hourField.value = "";
  if (!value) return;
  const match = value.match(/^(\d{4}-\d{2}-\d{2})(?:\s+(\d{2}))?/);
  if (!match) return;
  dateField.value = match[1];
  hourField.value = match[2] || "00";
}

function parseTaskDateTime(value, isEnd = false) {
  const normalized = value.includes(" ") ? value.replace(" ", "T") : `${value}T${isEnd ? "23:59:59" : "00:00:00"}`;
  const withSeconds = normalized.length === 13 ? `${normalized}:00:00` : normalized;
  return new Date(withSeconds);
}

function normalizeVersion(value) {
  return value.trim().replace(/^v/i, "");
}

function compareVersions(first, second) {
  const firstParts = normalizeVersion(first).split(".").map((part) => Number(part) || 0);
  const secondParts = normalizeVersion(second).split(".").map((part) => Number(part) || 0);
  const length = Math.max(firstParts.length, secondParts.length);
  for (let index = 0; index < length; index += 1) {
    const diff = (firstParts[index] || 0) - (secondParts[index] || 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

function setError(field, message) {
  const control = formFields[field];
  const error = formErrors[field];
  if (control) control.classList.add("error");
  if (error) {
    error.textContent = message;
    error.classList.add("show");
  }
}

function clearError(field) {
  const control = formFields[field];
  const error = formErrors[field];
  if (control) control.classList.remove("error");
  if (error) {
    error.textContent = "";
    error.classList.remove("show");
  }
}

function clearFormErrors() {
  Object.keys(formErrors).forEach(clearError);
  formFields.appTrigger.classList.remove("error");
  document.querySelectorAll(".form-row .error").forEach((element) => element.classList.remove("error"));
}

function setTemplateError(field, message) {
  const control = templateFormFields[field];
  const error = templateFormErrors[field];
  if (control) control.classList.add("error");
  if (error) {
    error.textContent = message;
    error.classList.add("show");
  }
}

function clearTemplateError(field) {
  const control = templateFormFields[field];
  const error = templateFormErrors[field];
  if (control) control.classList.remove("error");
  if (error) {
    error.textContent = "";
    error.classList.remove("show");
  }
}

function clearTemplateFormErrors() {
  Object.keys(templateFormErrors).forEach(clearTemplateError);
  templateFormFields.channelTrigger.classList.remove("error");
  document.querySelectorAll("#templateForm .error").forEach((element) => element.classList.remove("error"));
}

function getSelectedApps() {
  const apps = [];
  if (formFields.appClientApp.checked) apps.push("APP");
  if (formFields.appClientWeb.checked) apps.push("WEB");
  return apps;
}

function updateAppTrigger() {
  const selectedApps = getSelectedApps();
  formFields.appTrigger.textContent = selectedApps.length ? selectedApps.join(",") : "请选择应用端";
}

function getPlanByName(planName) {
  return plans.find((plan) => plan.plan_name === planName);
}

function renderPlanOptions() {
  formFields.planName.innerHTML = [
    '<option value="">请选择计划</option>',
    ...sortPlansByIdDesc(plans).map((plan) => `<option value="${escapeText(plan.plan_name)}">${escapeText(plan.plan_name)}</option>`),
  ].join("");
}

function renderTemplateOptions() {
  formFields.templateName.innerHTML = [
    '<option value="">请选择问卷模板</option>',
    ...templates.map((template) => `<option value="${escapeText(template)}">${escapeText(template)}</option>`),
  ].join("");
}

function syncTemplateNameOptions(templateName) {
  if (templateName && !templates.includes(templateName)) {
    templates.unshift(templateName);
    renderTemplateOptions();
  }
}

function renderTemplates(rows) {
  const displayRows = sortTemplatesByIdDesc(rows);
  templateRows.innerHTML = displayRows.map((template) => {
    const disabled = template.template_status === "无效";
    return `
      <tr data-template-id="${escapeText(template.template_id)}">
        <td>${escapeText(template.template_id)}</td>
        <td>${escapeText(template.template_name)}</td>
        <td><span class="status-pill">${escapeText(template.template_status)}</span></td>
        <td>${escapeText(template.channel)}</td>
        <td>${escapeText(template.scene)}</td>
        <td>${escapeText(getTemplateDisplayType(getTemplateRawType(template)))}</td>
        <td>${escapeText(template.creator)}</td>
        <td>${escapeText(template.updated_at)}</td>
        <td>
          <div class="table-actions">
            <button class="table-action-button edit-template-link" type="button" data-template-id="${escapeText(template.template_id)}">编辑模板</button>
            <button class="table-action-button toggle-template-link" type="button" data-template-id="${escapeText(template.template_id)}">${disabled ? "启用" : "禁用"}</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");

  templateRowCount.textContent = `共 ${rows.length} 条`;
}

function applyTemplateFilters() {
  const nameValue = templateNameSearch.value.trim();
  const statusValue = templateStatusSearch.value;
  const sceneValue = templateSceneSearch.value;

  filteredTemplates = npsTemplates.filter((template) => {
    const nameOk = !nameValue || template.template_name.includes(nameValue);
    const statusOk = statusValue === "所有状态" || template.template_status === statusValue;
    const sceneOk = sceneValue === "所有业务场景" || template.scene === sceneValue;
    return nameOk && statusOk && sceneOk;
  });

  renderTemplates(filteredTemplates);
}

function parseDate(value) {
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  if (
    date.getFullYear() !== Number(match[1]) ||
    date.getMonth() !== Number(match[2]) - 1 ||
    date.getDate() !== Number(match[3])
  ) {
    return null;
  }
  return date;
}

function isSameDate(first, second) {
  return first &&
    second &&
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();
}

function isBetween(date, start, end) {
  if (!start || !end) return false;
  const currentTime = date.getTime();
  return currentTime > start.getTime() && currentTime < end.getTime();
}

function setRangeText(element, value, placeholder) {
  element.textContent = value || placeholder;
  element.classList.toggle("is-placeholder", !value);
}

function updateRangeTrigger() {
  const parsedRange = parseDateRange(taskDateRange.value);
  if (parsedRange && parsedRange !== "invalid") {
    setRangeText(rangeStartText, formatDate(parsedRange.start), "Start date");
    setRangeText(rangeEndText, formatDate(parsedRange.end), "End date");
    return;
  }
  setRangeText(rangeStartText, "", "Start date");
  setRangeText(rangeEndText, "", "End date");
}

function renderCalendarPane(monthDate, titleElement, gridElement) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const dayOffset = (firstDay.getDay() + 6) % 7;
  const dayCount = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const cells = [];

  titleElement.textContent = `${year}年${month + 1}月`;

  for (let index = 0; index < dayOffset; index += 1) {
    cells.push('<span class="calendar-empty"></span>');
  }

  for (let day = 1; day <= dayCount; day += 1) {
    const date = new Date(year, month, day);
    const classes = ["calendar-day"];
    if (isSameDate(date, draftStart)) classes.push("selected-start");
    if (isSameDate(date, draftEnd)) classes.push("selected-end");
    if (isBetween(date, draftStart, draftEnd)) classes.push("in-range");
    if (isSameDate(date, today)) classes.push("today");
    cells.push(`<button class="${classes.join(" ")}" type="button" data-date="${formatDate(date)}">${day}</button>`);
  }

  gridElement.innerHTML = cells.join("");
}

function renderCalendar() {
  const rightMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1);
  renderCalendarPane(calendarMonth, leftCalendarTitle, leftCalendarGrid);
  renderCalendarPane(rightMonth, rightCalendarTitle, rightCalendarGrid);
}

function commitDraftRange() {
  if (!draftStart || !draftEnd) return;
  taskDateRange.value = `${formatDate(draftStart)} - ${formatDate(draftEnd)}`;
  rangePicker.classList.remove("error");
  dateError.classList.remove("show");
  updateRangeTrigger();
  datePanel.classList.remove("open");
}

function syncDraftRangeFromInput() {
  const parsedRange = parseDateRange(taskDateRange.value);
  if (parsedRange && parsedRange !== "invalid") {
    draftStart = new Date(parsedRange.start.getFullYear(), parsedRange.start.getMonth(), parsedRange.start.getDate());
    draftEnd = new Date(parsedRange.end.getFullYear(), parsedRange.end.getMonth(), parsedRange.end.getDate());
    calendarMonth = new Date(draftStart.getFullYear(), draftStart.getMonth(), 1);
  } else {
    draftStart = null;
    draftEnd = null;
    calendarMonth = new Date(defaultCalendarMonth.getFullYear(), defaultCalendarMonth.getMonth(), 1);
  }
  renderCalendar();
}

function selectCalendarDate(dateText) {
  const selectedDate = parseDate(dateText);
  if (!selectedDate) return;

  if (!draftStart || draftEnd) {
    draftStart = selectedDate;
    draftEnd = null;
  } else if (selectedDate < draftStart) {
    draftEnd = draftStart;
    draftStart = selectedDate;
  } else {
    draftEnd = selectedDate;
  }

  renderCalendar();
  commitDraftRange();
}

function renderRows(rows) {
  const displayRows = sortTasksByIdDesc(rows);
  taskRows.innerHTML = displayRows.map((task) => {
    const pauseDisabled = !canPause(task);
    return `
      <tr data-task-id="${escapeText(task.task_id)}">
        <td>${escapeText(task.task_id)}</td>
        <td>${escapeText(task.task_name)}</td>
        <td><span class="status-pill">${escapeText(task.task_status)}</span></td>
        <td>${escapeText(task.task_scene)}</td>
        <td><button class="link-button audience-link" type="button" data-task-id="${escapeText(task.task_id)}">${escapeText(task.audience_link_text)}</button></td>
        <td>${escapeText(task.app_client)}</td>
        <td>${escapeText(task.delivery_version)}</td>
        <td>${escapeText(task.start_time)}</td>
        <td>${escapeText(task.end_time)}</td>
        <td><button class="link-button template-link" type="button" data-template="${escapeText(task.template_name)}">${escapeText(task.template_name)}</button></td>
        <td>${escapeText(task.plan_id)}</td>
        <td>${escapeText(task.plan_name)}</td>
        <td>${escapeText(task.total_users)}</td>
        <td>${escapeText(task.actual_delivery_users)}</td>
        <td>${escapeText(task.exposed_users)}</td>
        <td>
          <div class="table-actions">
            <button class="table-action-button view-link" type="button" data-task-id="${escapeText(task.task_id)}">查看</button>
            <button class="table-action-button edit-link" type="button" data-task-id="${escapeText(task.task_id)}">编辑</button>
            <button class="table-action-button pause-link" type="button" data-task-id="${escapeText(task.task_id)}" ${pauseDisabled ? "disabled" : ""}>暂停</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");

  rowCount.textContent = `共 ${rows.length} 条`;
}

function parseDateRange(value) {
  const trimmed = value.trim();
  if (!trimmed) return null;
  const match = trimmed.match(/^(\d{4}-\d{2}-\d{2})\s+-\s+(\d{4}-\d{2}-\d{2})$/);
  if (!match) return "invalid";
  const start = new Date(`${match[1]}T00:00:00`);
  const end = new Date(`${match[2]}T23:59:59`);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || start > end) {
    return "invalid";
  }
  return { start, end };
}

function intersectsRange(task, range) {
  if (!range) return true;
  const taskStart = parseTaskDateTime(task.start_time);
  const taskEnd = parseTaskDateTime(task.end_time, true);
  return taskStart <= range.end && taskEnd >= range.start;
}

function applyFilters() {
  const range = parseDateRange(taskDateRange.value);
  if (range === "invalid") {
    rangePicker.classList.add("error");
    dateError.classList.add("show");
    return;
  }

  rangePicker.classList.remove("error");
  dateError.classList.remove("show");

  const nameValue = taskName.value.trim();
  const sceneValue = taskScene.value;
  const statusValue = taskStatus.value;

  filteredTasks = tasks.filter((task) => {
    const nameOk = !nameValue || task.task_name.includes(nameValue);
    const sceneOk = sceneValue === "所有" || task.task_scene === sceneValue;
    const statusOk = statusValue === "所有" || task.task_status === statusValue;
    const dateOk = intersectsRange(task, range);
    return nameOk && sceneOk && statusOk && dateOk;
  });

  renderRows(filteredTasks);
}

function getAudienceBaseRows() {
  return currentAudienceTaskId
    ? audienceUsers.filter((item) => item.task_id === currentAudienceTaskId)
    : [...audienceUsers];
}

function renderAudienceRows(rows) {
  audienceRows.innerHTML = rows.length
    ? rows.map((item) => `
      <tr>
        <td>${escapeText(item.ringconn_id)}</td>
        <td>${escapeText(item.country)}</td>
        <td>${escapeText(item.registered_at)}</td>
        <td>${escapeText(item.user_flag)}</td>
        <td>${escapeText(item.delivery_result)}</td>
      </tr>
    `).join("")
    : '<tr><td colspan="5">暂无数据</td></tr>';
  audienceRowCount.textContent = `共 ${rows.length} 条`;
}

function applyAudienceFilters() {
  const ringconnId = audienceRingconnIdSearch.value.trim().toLowerCase();
  filteredAudienceUsers = getAudienceBaseRows().filter((item) => (
    !ringconnId || item.ringconn_id.toLowerCase().includes(ringconnId)
  ));
  renderAudienceRows(filteredAudienceUsers);
}

function openAudiencePage(taskId) {
  currentAudienceTaskId = taskId || "";
  audienceRingconnIdSearch.value = "";
  setActiveNav("task");
  setTemplateLayout(false);
  hideAllMainPanels();
  document.getElementById("audiencePanel").classList.add("active");
  document.querySelector(".breadcrumb").textContent = "NPS管理 / NPS任务 / 投放人群";
  filteredAudienceUsers = getAudienceBaseRows();
  renderAudienceRows(filteredAudienceUsers);
  if (window.location.hash !== "#nps-audience") {
    window.location.hash = "nps-audience";
  }
}

function openPause(taskId) {
  selectedPauseTaskId = taskId;
  pauseLightbox.classList.add("show");
  pauseLightbox.setAttribute("aria-hidden", "false");
}

function closePause() {
  selectedPauseTaskId = null;
  pauseLightbox.classList.remove("show");
  pauseLightbox.setAttribute("aria-hidden", "true");
}

function confirmPause() {
  const task = tasks.find((item) => item.task_id === selectedPauseTaskId);
  if (task && canPause(task)) {
    task.task_status = "暂停";
  }
  closePause();
  applyFilters();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

function navigatePlaceholder(pageName, detail = "") {
  const suffix = detail ? `：${detail}` : "";
  window.location.hash = encodeURIComponent(pageName);
  showToast(`${pageName}${suffix}`);
}

function setActiveNav(navName) {
  templateNav.classList.toggle("active", navName === "template");
  taskNav.classList.toggle("active", navName === "task");
}

function setTemplateLayout(enabled) {
  document.querySelector(".prototype-shell").classList.toggle("template-layout", enabled);
}

function hideAllMainPanels() {
  document.getElementById("templatePanel").classList.remove("active");
  document.getElementById("templateFormPanel").classList.remove("active");
  document.getElementById("taskPanel").classList.remove("active");
  document.getElementById("taskFormPanel").classList.remove("active");
  document.getElementById("audiencePanel").classList.remove("active");
}

function showTemplateList() {
  setActiveNav("template");
  setTemplateLayout(true);
  hideAllMainPanels();
  document.getElementById("templatePanel").classList.add("active");
  document.querySelector(".breadcrumb").textContent = "NPS管理 / NPS问卷模板";
  if (window.location.hash !== "#nps-template") {
    window.location.hash = "nps-template";
  }
}

function showTaskList() {
  setActiveNav("task");
  setTemplateLayout(false);
  hideAllMainPanels();
  document.getElementById("taskPanel").classList.add("active");
  document.querySelector(".breadcrumb").textContent = "NPS管理 / NPS任务";
  if (window.location.hash !== "#nps-task") {
    window.location.hash = "nps-task";
  }
}

function getAudienceFileNames() {
  return [...audienceUploadedFileNames];
}

function renderAudienceFiles(fileNames) {
  audienceUploadedFileNames = [...fileNames];
  if (!fileNames.length) {
    formFields.audienceFileList.textContent = "未上传文件";
    return;
  }
  formFields.audienceFileList.innerHTML = fileNames
    .map((fileName, index) => `
      <div class="file-name-item">
        <span class="file-name-text" title="${escapeText(fileName)}">${escapeText(fileName)}</span>
        <button class="link-button file-remove" type="button" data-file-index="${index}">删除文件</button>
      </div>
    `)
    .join("");
}

function clearAudienceFile() {
  formFields.audienceFile.value = "";
  renderAudienceFiles([]);
}

function setTaskFormReadonly(readonly) {
  document.getElementById("taskForm").classList.toggle("readonly", readonly);
  [
    formFields.taskName,
    formFields.planName,
    formFields.taskScene,
    formFields.startDate,
    formFields.startHour,
    formFields.endDate,
    formFields.endHour,
    formFields.appTrigger,
    formFields.appClientApp,
    formFields.appClientWeb,
    formFields.androidStart,
    formFields.androidEnd,
    formFields.iosStart,
    formFields.iosEnd,
    formFields.templateName,
    formFields.audienceFile,
  ].forEach((field) => {
    field.disabled = readonly;
  });
  document.getElementById("addPlanBtn").disabled = readonly;
  document.getElementById("chooseFileBtn").disabled = readonly;
  document.getElementById("submitTaskBtn").classList.toggle("hidden", readonly);
  document.getElementById("cancelTaskBtn").textContent = readonly ? "返回" : "取消";
  if (readonly) formFields.appPanel.classList.remove("open");
}

function resetTaskForm() {
  setTaskFormReadonly(false);
  clearFormErrors();
  document.getElementById("taskForm").reset();
  formFields.editingTaskId.value = "";
  formFields.planName.value = "";
  formFields.taskScene.value = "";
  formFields.templateName.value = "";
  formFields.appClientApp.checked = true;
  formFields.appClientWeb.checked = false;
  updateAppTrigger();
  clearAudienceFile();
}

function fillTaskForm(task) {
  formFields.editingTaskId.value = task.task_id;
  formFields.taskName.value = task.task_name;
  formFields.planName.value = task.plan_name;
  formFields.taskScene.value = task.task_scene;
  setDateHourValue(formFields.startDate, formFields.startHour, task.start_time);
  setDateHourValue(formFields.endDate, formFields.endHour, task.end_time);
  formFields.templateName.value = task.template_name;
  formFields.appClientApp.checked = task.app_client.includes("APP");
  formFields.appClientWeb.checked = task.app_client.includes("WEB") || task.app_client.includes("Web");
  updateAppTrigger();
  fillVersionFields(task.delivery_version);
  if (task.audience_file_names && task.audience_file_names.length) {
    renderAudienceFiles(task.audience_file_names);
  } else if (task.audience_file_name) {
    renderAudienceFiles([task.audience_file_name]);
  }
}

function openTaskForm(mode, taskId = "") {
  formMode = mode;
  resetTaskForm();
  setActiveNav("task");
  setTemplateLayout(false);
  hideAllMainPanels();
  document.getElementById("taskFormPanel").classList.add("active");
  const pageName = mode === "view" ? "查看任务" : mode === "edit" ? "编辑任务" : "新增任务";
  document.querySelector(".breadcrumb").textContent = `NPS管理 / NPS任务 / ${pageName}`;

  if (mode === "edit" || mode === "view") {
    const task = tasks.find((item) => item.task_id === taskId);
    if (!task) return;
    fillTaskForm(task);
    setTaskFormReadonly(mode === "view");
  }
}

function fillVersionFields(versionText) {
  [formFields.androidStart, formFields.androidEnd, formFields.iosStart, formFields.iosEnd].forEach((field) => {
    field.value = "";
  });
  versionText.split(",").map((item) => item.trim()).forEach((item) => {
    const match = item.match(/^(Android|iOS)\s*>\s*([^~]+?)(?:\s*~\s*(.+))?$/i);
    if (!match) return;
    const platform = match[1].toLowerCase();
    const start = match[2].trim();
    const end = match[3] ? match[3].trim() : "";
    if (platform === "android") {
      formFields.androidStart.value = start;
      formFields.androidEnd.value = end;
    } else {
      formFields.iosStart.value = start;
      formFields.iosEnd.value = end;
    }
  });
}

function buildVersionText() {
  const versions = [];
  const androidStart = formFields.androidStart.value.trim();
  const androidEnd = formFields.androidEnd.value.trim();
  const iosStart = formFields.iosStart.value.trim();
  const iosEnd = formFields.iosEnd.value.trim();
  if (androidStart) versions.push(`Android > ${androidStart}${androidEnd ? ` ~ ${androidEnd}` : ""}`);
  if (iosStart) versions.push(`iOS > ${iosStart}${iosEnd ? ` ~ ${iosEnd}` : ""}`);
  return versions.join(", ") || "-";
}

function validateTaskForm() {
  clearFormErrors();
  let valid = true;
  const currentHour = getCurrentHour();
  const startTime = parseDateHour(formFields.startDate.value, formFields.startHour.value);
  const endTime = parseDateHour(formFields.endDate.value, formFields.endHour.value);

  if (!formFields.taskName.value.trim()) {
    setError("taskName", "任务名不能为空。");
    valid = false;
  }
  if (!formFields.planName.value) {
    setError("planName", "计划名不能为空。");
    valid = false;
  }
  if (!formFields.taskScene.value) {
    setError("taskScene", "任务场景不能为空。");
    valid = false;
  }
  if (!startTime) {
    setError("startTime", "任务开始时间不能为空。");
    valid = false;
  } else if (startTime < currentHour) {
    setError("startTime", "任务开始时间必须大于等于当前小时。");
    valid = false;
  }
  if (!endTime) {
    setError("endTime", "任务结束时间不能为空。");
    valid = false;
  } else if (startTime && endTime <= startTime) {
    setError("endTime", "任务结束时间必须大于开始时间。");
    valid = false;
  }
  if (getSelectedApps().length === 0) {
    formFields.appTrigger.classList.add("error");
    formErrors.appClient.textContent = "应用端不能为空。";
    formErrors.appClient.classList.add("show");
    valid = false;
  }
  if (!formFields.templateName.value) {
    setError("templateName", "问卷模板不能为空。");
    valid = false;
  }

  const versionPairs = [
    [formFields.androidStart.value.trim(), formFields.androidEnd.value.trim()],
    [formFields.iosStart.value.trim(), formFields.iosEnd.value.trim()],
  ];
  const versionInvalid = versionPairs.some(([start, end]) => (!start && end) || (start && end && compareVersions(end, start) <= 0));
  if (versionInvalid) {
    formErrors.version.textContent = "投放版本需先填写开始值，且结束值必须大于开始值。";
    formErrors.version.classList.add("show");
    valid = false;
  }

  return valid;
}

function submitTaskForm() {
  if (formMode === "view") {
    showTaskList();
    return;
  }
  if (!validateTaskForm()) {
    showToast("提交失败，请检查表单。");
    return;
  }

  const selectedPlan = getPlanByName(formFields.planName.value);
  if (!selectedPlan) {
    showToast("提交失败，请检查计划。");
    return;
  }

  const audienceFileNames = getAudienceFileNames();
  const taskPayload = {
    task_name: formFields.taskName.value.trim(),
    task_scene: formFields.taskScene.value,
    audience_link_text: "查看",
    audience_file_names: audienceFileNames,
    audience_file_name: audienceFileNames.join(","),
    app_client: getSelectedApps().join(","),
    delivery_version: buildVersionText(),
    start_time: formatDateHour(formFields.startDate.value, formFields.startHour.value),
    end_time: formatDateHour(formFields.endDate.value, formFields.endHour.value),
    template_name: formFields.templateName.value,
    plan_id: selectedPlan.plan_id,
    plan_name: selectedPlan.plan_name,
  };

  if (formMode === "edit") {
    const task = tasks.find((item) => item.task_id === formFields.editingTaskId.value);
    if (!task) {
      showToast("提交失败，任务不存在。");
      return;
    }
    Object.assign(task, taskPayload);
    showToast("编辑成功。");
  } else {
    tasks.push({
      task_id: getNextId(tasks, "task_id"),
      task_status: "初始状态",
      total_users: "0",
      actual_delivery_users: "0",
      exposed_users: "0",
      ...taskPayload,
    });
    showToast("新增成功。");
  }

  filteredTasks = [...tasks];
  renderRows(filteredTasks);
  showTaskList();
}

function closePlanDialog() {
  planLightbox.classList.remove("show");
  planLightbox.setAttribute("aria-hidden", "true");
}

function submitNewPlan() {
  clearError("newPlanName");
  const planName = formFields.newPlanName.value.trim();
  if (!planName) {
    setError("newPlanName", "计划名称不能为空。");
    return;
  }
  const newPlan = {
    plan_id: getNextId(plans, "plan_id"),
    plan_name: planName,
    plan_status: "启用",
  };
  plans.push(newPlan);
  renderPlanOptions();
  formFields.planName.value = newPlan.plan_name;
  closePlanDialog();
  showToast("新增计划成功。");
}

function getSelectedTemplateChannels() {
  const channels = [];
  if (templateFormFields.channelApp.checked) channels.push("APP");
  if (templateFormFields.channelWeb.checked) channels.push("WEB");
  return channels;
}

function updateTemplateChannelTrigger() {
  const channels = getSelectedTemplateChannels();
  templateFormFields.channelTrigger.textContent = channels.length ? channels.join(", ") : "请选择渠道";
}

function getSelectedLinkedQuestionnaires() {
  return [
    templateFormFields.linkedFull,
    templateFormFields.linkedGroup2,
    templateFormFields.linkedSurvey1,
    templateFormFields.linkedSurvey2,
  ].filter((field) => field.checked).map((field) => field.value);
}

function updateLinkedQuestionnaireTrigger() {
  const selected = getSelectedLinkedQuestionnaires();
  templateFormFields.linkedTrigger.textContent = selected.length > 3 ? `已选择 ${selected.length} 项` : selected.length ? selected.join("，") : "请选择完整问卷";
  if (selected.length) clearTemplateError("linked");
}

function setLinkedQuestionnaires(values) {
  const selected = new Set(values || []);
  [templateFormFields.linkedFull, templateFormFields.linkedGroup2, templateFormFields.linkedSurvey1, templateFormFields.linkedSurvey2].forEach((field) => {
    field.checked = selected.has(field.value);
  });
  updateLinkedQuestionnaireTrigger();
}

function updateRichTextCount() {
  document.querySelector(".char-count").textContent = `${templateFormFields.popupCopy.textContent.length} / 1000`;
}

function updateQuestionnaireDescriptionCount() {
  templateFormFields.questionnaireDescriptionCount.textContent = `${templateFormFields.questionnaireDescription.value.length} / 200`;
}

function saveRichTextSelection() {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;
  const range = selection.getRangeAt(0);
  if (templateFormFields.popupCopy.contains(range.commonAncestorContainer)) {
    savedRichTextRange = range;
  }
}

function restoreRichTextSelection() {
  if (!savedRichTextRange) return;
  const selection = window.getSelection();
  if (!selection) return;
  selection.removeAllRanges();
  selection.addRange(savedRichTextRange);
}

function applyRichTextCommand(command, value = null) {
  templateFormFields.popupCopy.focus();
  restoreRichTextSelection();
  document.execCommand(command, false, value);
  saveRichTextSelection();
  updateRichTextCount();
}

function isPopupAppQuestionnaireType(type) {
  return type === "弹窗问卷(APP功能)" || type === "全局问卷(APP功能)" || type === "全局问题(APP功能)";
}

function isDesignQuestionnaireType(type) {
  return type === "弹窗问卷(设计/用研)" || type === "全局问卷(设计反馈)" || type === "全局问卷(设计问卷)";
}

function updateQuestionnaireTypeByScene() {
  const scene = templateFormFields.scene.value;
  const typeSelect = templateFormFields.questionnaireType;
  const functionOption = typeSelect.querySelector('option[value="功能问卷"]');

  if (!scene) {
    typeSelect.value = "";
    typeSelect.disabled = true;
    if (functionOption) {
      functionOption.hidden = false;
      functionOption.disabled = false;
    }
  } else if (scene === "全局") {
    typeSelect.disabled = false;
    if (functionOption) {
      functionOption.hidden = true;
      functionOption.disabled = true;
    }
    if (typeSelect.value === "功能问卷") typeSelect.value = "";
  } else {
    typeSelect.value = "功能问卷";
    typeSelect.disabled = true;
    if (functionOption) {
      functionOption.hidden = false;
      functionOption.disabled = false;
    }
  }

  clearTemplateError("questionnaireType");
  updateTemplateTypePanel();
}

function updateTemplateStepControls() {
  const isDesignType = isDesignQuestionnaireType(templateFormFields.questionnaireType.value);
  document.getElementById("submitTemplateFromStepOneBtn").classList.toggle("hidden", !isDesignType);
  document.getElementById("nextTemplateStepBtn").classList.toggle("hidden", isDesignType);
  document.getElementById("templateStepTwo").classList.toggle("hidden", isDesignType);
  document.getElementById("addQuestionBtn").classList.toggle("hidden", isGlobalAppQuestionnaire());
  if (isDesignType && templateStep === 2) setTemplateStep(1);
}

function setTemplateStep(step) {
  if (step === 2 && isDesignQuestionnaireType(templateFormFields.questionnaireType.value)) {
    step = 1;
  }
  if (step === 2 && isGlobalAppQuestionnaire()) {
    ensureGlobalAppFixedQuestions();
  }
  templateStep = step;
  document.getElementById("templateStepOne").classList.toggle("active", step === 1);
  document.getElementById("templateStepTwo").classList.toggle("active", step === 2);
  document.getElementById("templateStepOnePanel").classList.toggle("active", step === 1);
  document.getElementById("templateStepTwoPanel").classList.toggle("active", step === 2);
  document.getElementById("addQuestionBtn").classList.toggle("hidden", isGlobalAppQuestionnaire());
  if (step === 2) renderTemplateQuestionList();
}

function getTemplateDisplayType(questionnaireType) {
  if (isDesignQuestionnaireType(questionnaireType)) return "弹窗问卷(设计/用研)";
  if (isPopupAppQuestionnaireType(questionnaireType)) return "弹窗问卷(APP功能)";
  if (questionnaireType === "分组问卷" || questionnaireType === "分组") return "分组问卷";
  if (questionnaireType === "功能问卷" || questionnaireType === "常规") return "功能问卷";
  if (questionnaireType === "弹窗") return "弹窗问卷(APP功能)";
  return "功能问卷";
}

function getTemplateRawType(template) {
  if (template.raw_questionnaire_type) return getTemplateDisplayType(template.raw_questionnaire_type);
  return getTemplateDisplayType(template.questionnaire_type);
}

function updateTemplateTypePanel() {
  const type = templateFormFields.questionnaireType.value;
  document.querySelectorAll(".type-panel").forEach((panel) => panel.classList.remove("active"));
  document.getElementById("groupCountRow").style.display = type === "分组问卷" ? "flex" : "none";
  const isDesignType = isDesignQuestionnaireType(type);
  const usesLinkedQuestionnaire = isPopupAppQuestionnaireType(type) || isDesignType;
  if (!usesLinkedQuestionnaire) templateFormFields.linkedPanel.classList.remove("open");
  updateTemplateStepControls();

  if (!type) {
    renderTemplateQuestionList();
    return;
  }

  if (usesLinkedQuestionnaire) {
    document.getElementById("typePanelLinked").classList.add("active");
  }
  if (isDesignType) {
    document.getElementById("typePanelDesign").classList.add("active");
  }
  if (type === "功能问卷" || type === "分组问卷") {
    document.getElementById("typePanelCommon").classList.add("active");
  }

  if (isGlobalAppQuestionnaire()) ensureGlobalAppFixedQuestions();
  ensureAddCommonSingleQuestion();
  renderTemplateQuestionList();
}

function getAllowedQuestionTypes() {
  return isGlobalAppQuestionnaire()
    ? ["评分(全局)", "多选题"]
    : ["评分(普通)", "单选题", "多选题", "开放题"];
}

function getQuestionTypeNote() {
  return isGlobalAppQuestionnaire()
    ? "弹窗问卷(APP功能)固定为评分(全局)和多选题"
    : "支持评分、单选题、多选题和开放题，不同类型展示不同字段";
}

function getDefaultQuestionType() {
  return isGlobalAppQuestionnaire() ? "评分(全局)" : "评分(普通)";
}

function isGlobalAppQuestionnaire() {
  return isPopupAppQuestionnaireType(templateFormFields.questionnaireType.value);
}

function isCommonQuestionnaire() {
  return templateFormFields.questionnaireType.value === "功能问卷" || templateFormFields.questionnaireType.value === "分组问卷";
}

function normalizeQuestionOptions(options) {
  const source = Array.isArray(options) ? options : [];
  const normalized = source.map((option) => {
    if (typeof option === "string") {
      return { label: option, isOther: option === "其他" };
    }
    return {
      label: option.label || "选项",
      isOther: Boolean(option.isOther),
    };
  });
  if (!normalized.length) normalized.push({ label: "选项", isOther: false });
  return normalized.sort((a, b) => Number(a.isOther) - Number(b.isOther));
}

function createDefaultQuestion(type = getDefaultQuestionType()) {
  return {
    type,
    title: "",
    subtitle: "",
    scoreRange: "10",
    scoreMinDesc: "",
    scoreMaxDesc: "",
    lowScoreGuide: "",
    highScoreGuide: "",
    otherScoreGuide: "",
    required: "必填",
    charLimit: "500",
    choiceOptions: [{ label: "选项", isOther: false }],
    errors: {},
  };
}

function normalizeTemplateQuestion(question) {
  const allowedTypes = getAllowedQuestionTypes();
  const normalizedType = question.type === "评分(功能/分组)" ? "评分(普通)" : question.type;
  const type = allowedTypes.includes(normalizedType) ? normalizedType : getDefaultQuestionType();
  const optionText = typeof question.options === "string" ? question.options : "";
  const scoreMatch = optionText.match(/1-(5|10)/);
  const charLimitMatch = optionText.match(/(\d+)\s*字符/);
  const rawCharLimit = question.charLimit || question.char_limit || (charLimitMatch ? charLimitMatch[1] : "500");
  let rawOptions = question.choiceOptions || question.choice_options || [];
  if (!rawOptions.length && (type === "单选题" || type === "多选题") && optionText) {
    rawOptions = optionText.split(",").map((option) => option.trim()).filter(Boolean);
  }

  return {
    ...createDefaultQuestion(type),
    ...question,
    type,
    scoreRange: question.scoreRange || question.score_range || (scoreMatch ? scoreMatch[1] : "10"),
    scoreMinDesc: question.scoreMinDesc || question.score_min_desc || "",
    scoreMaxDesc: question.scoreMaxDesc || question.score_max_desc || "",
    lowScoreGuide: question.lowScoreGuide || question.low_score_guide || "",
    highScoreGuide: question.highScoreGuide || question.high_score_guide || "",
    otherScoreGuide: question.otherScoreGuide || question.other_score_guide || "",
    required: question.required || (optionText.includes("选填") ? "选填" : "必填"),
    charLimit: ["500", "1000", "20000"].includes(rawCharLimit) ? rawCharLimit : "500",
    choiceOptions: normalizeQuestionOptions(rawOptions),
    errors: {},
  };
}

function syncQuestionTypesWithTemplate() {
  const allowedTypes = getAllowedQuestionTypes();
  templateQuestions = templateQuestions.map((question) => {
    if (allowedTypes.includes(question.type)) return question;
    return { ...question, type: getDefaultQuestionType(), errors: {} };
  });
}

function renderQuestionTypeOptions(selectedType) {
  return getAllowedQuestionTypes().map((type) => (
    `<option value="${escapeText(type)}"${type === selectedType ? " selected" : ""}>${escapeText(type)}</option>`
  )).join("");
}

function ensureGlobalAppFixedQuestions() {
  const currentScore = templateQuestions.find((question) => question.type === "评分(全局)");
  const currentMultiple = templateQuestions.find((question) => question.type === "多选题");
  templateQuestions = [
    { ...createDefaultQuestion("评分(全局)"), ...(currentScore || {}), type: "评分(全局)", errors: {} },
    { ...createDefaultQuestion("多选题"), ...(currentMultiple || {}), type: "多选题", errors: {} },
  ];
}

function ensureAddCommonSingleQuestion() {
  if (templateFormMode !== "add" || !isCommonQuestionnaire()) return;
  if (templateQuestions.length === 1 && templateQuestions[0].type === "评分(普通)") return;
  templateQuestions = [createDefaultQuestion("评分(普通)")];
}

function renderScorePreview(range) {
  return Array.from({ length: Number(range) }, (_, index) => `<span>${index + 1}</span>`).join("");
}

function renderQuestionError(message) {
  return message ? `<div class="question-error">${escapeText(message)}</div>` : "";
}

function renderChoiceOptions(question, questionIndex, inputType) {
  question.choiceOptions = normalizeQuestionOptions(question.choiceOptions);
  return `
    <div class="question-option-list">
      ${question.choiceOptions.map((option, optionIndex) => `
        <div class="question-option-row">
          <input type="${inputType}" disabled />
          <input class="question-option-input" type="text" value="${escapeText(option.label)}" data-question-index="${questionIndex}" data-option-index="${optionIndex}" data-question-field="optionLabel" ${option.isOther ? "readonly" : ""} />
          <button class="link-button question-remove-option" type="button" data-question-index="${questionIndex}" data-option-index="${optionIndex}">删除</button>
        </div>
      `).join("")}
    </div>
    ${renderQuestionError(question.errors && question.errors.options)}
    <div class="question-option-actions">
      <button class="link-button question-add-option" type="button" data-question-index="${questionIndex}">添加选项</button>
      <button class="link-button question-add-other" type="button" data-question-index="${questionIndex}">添加其他</button>
    </div>
  `;
}

function renderQuestionBody(question, index) {
  if (question.type === "评分(全局)" || question.type === "评分(普通)" || question.type === "评分(功能/分组)") {
    return `
      <div class="question-row">
        <label class="question-label required">选项</label>
        <select class="ax-select question-control question-field" data-question-index="${index}" data-question-field="scoreRange">
          <option value="10"${question.scoreRange === "10" ? " selected" : ""}>10</option>
          <option value="5"${question.scoreRange === "5" ? " selected" : ""}>5</option>
        </select>
      </div>
      <div class="score-preview">${renderScorePreview(question.scoreRange)}</div>
      <div class="question-row">
        <label class="question-label">最小值描述</label>
        <input class="ax-input question-control question-field" type="text" value="${escapeText(question.scoreMinDesc)}" data-question-index="${index}" data-question-field="scoreMinDesc" />
      </div>
      <div class="question-row">
        <label class="question-label">最大值描述</label>
        <input class="ax-input question-control question-field" type="text" value="${escapeText(question.scoreMaxDesc)}" data-question-index="${index}" data-question-field="scoreMaxDesc" />
      </div>
      ${question.type === "评分(全局)" ? `
        <div class="question-row">
          <label class="question-label">低评分引导文案</label>
          <input class="ax-input question-control question-field" type="text" value="${escapeText(question.lowScoreGuide)}" data-question-index="${index}" data-question-field="lowScoreGuide" />
        </div>
        <div class="question-row">
          <label class="question-label">高评分引导文案</label>
          <input class="ax-input question-control question-field" type="text" value="${escapeText(question.highScoreGuide)}" data-question-index="${index}" data-question-field="highScoreGuide" />
        </div>
        <div class="question-row">
          <label class="question-label">其他评分引导文案</label>
          <input class="ax-input question-control question-field" type="text" value="${escapeText(question.otherScoreGuide)}" data-question-index="${index}" data-question-field="otherScoreGuide" />
        </div>
      ` : ""}
    `;
  }

  if (question.type === "单选题" || question.type === "多选题") {
    return `
      <div class="question-row options-row">
        <label class="question-label">选项</label>
        <div class="question-options">
          ${renderChoiceOptions(question, index, question.type === "单选题" ? "radio" : "checkbox")}
        </div>
      </div>
    `;
  }

  return `
    <div class="question-row radio-row">
      <label class="question-label required">必填/选填</label>
      <label><input class="question-field" name="openRequired-${index}" type="radio" value="必填" data-question-index="${index}" data-question-field="required" ${question.required === "必填" ? "checked" : ""} /> 必填</label>
      <label><input class="question-field" name="openRequired-${index}" type="radio" value="选填" data-question-index="${index}" data-question-field="required" ${question.required === "选填" ? "checked" : ""} /> 选填</label>
    </div>
    <div class="question-row">
      <label class="question-label required">字符限制</label>
      <select class="ax-select question-control question-field" data-question-index="${index}" data-question-field="charLimit">
        <option value="500"${question.charLimit === "500" ? " selected" : ""}>500</option>
        <option value="1000"${question.charLimit === "1000" ? " selected" : ""}>1000</option>
        <option value="20000"${question.charLimit === "20000" ? " selected" : ""}>20000</option>
      </select>
    </div>
  `;
}

function renderTemplateQuestionList() {
  if (!templateQuestions.length) {
    templateFormFields.questionRepeater.innerHTML = "";
    return;
  }

  if (isGlobalAppQuestionnaire()) ensureGlobalAppFixedQuestions();
  syncQuestionTypesWithTemplate();
  const isFixedGlobalApp = isGlobalAppQuestionnaire();
  const canRemoveQuestion = !isFixedGlobalApp && templateQuestions.length > 1;
  templateFormFields.questionRepeater.innerHTML = templateQuestions.map((question, index) => `
    <section class="question-card" data-question-index="${index}">
      ${canRemoveQuestion ? `<button class="link-button question-remove" type="button" data-question-index="${index}">删除</button>` : ""}
      <div class="question-row question-type-row">
        <label class="question-label required">问题类型</label>
        <select class="ax-select question-control question-field" data-question-index="${index}" data-question-field="type" ${isFixedGlobalApp ? "disabled" : ""}>
          ${renderQuestionTypeOptions(question.type)}
        </select>
        <span class="question-type-note">${escapeText(getQuestionTypeNote())}</span>
      </div>
      <div class="question-row">
        <label class="question-label required">问题标题</label>
        <input class="ax-input question-control question-field" type="text" value="${escapeText(question.title)}" data-question-index="${index}" data-question-field="title" />
        ${renderQuestionError(question.errors && question.errors.title)}
      </div>
      <div class="question-row">
        <label class="question-label">问题副标题</label>
        <input class="ax-input question-control question-field" type="text" value="${escapeText(question.subtitle)}" data-question-index="${index}" data-question-field="subtitle" />
      </div>
      ${renderQuestionBody(question, index)}
    </section>
  `).join("");
}

function validateTemplateStepOne() {
  clearTemplateFormErrors();
  let valid = true;
  const questionnaireType = templateFormFields.questionnaireType.value;
  const isCommonQuestionnaireType = questionnaireType === "功能问卷" || questionnaireType === "分组问卷";
  const versionPairs = [
    [templateFormFields.androidVersion.value.trim(), templateFormFields.androidVersionEnd.value.trim()],
    [templateFormFields.iosVersion.value.trim(), templateFormFields.iosVersionEnd.value.trim()],
  ];
  const hasVersion = versionPairs.some(([start]) => Boolean(start));
  const versionInvalid = versionPairs.some(([start, end]) => (!start && end) || (start && end && compareVersions(end, start) <= 0));

  if (!templateFormFields.templateTitle.value.trim()) {
    setTemplateError("templateTitle", "模板名称不能为空。");
    valid = false;
  }
  if (!templateFormFields.scene.value) {
    setTemplateError("scene", "业务场景不能为空。");
    valid = false;
  }
  if (!questionnaireType) {
    setTemplateError("questionnaireType", "问卷类型不能为空。");
    valid = false;
  }
  if (!getSelectedTemplateChannels().length) {
    templateFormFields.channelTrigger.classList.add("error");
    templateFormErrors.channel.textContent = "可用渠道不能为空。";
    templateFormErrors.channel.classList.add("show");
    valid = false;
  }
  if (!templateFormFields.bannerTitle.value.trim()) {
    setTemplateError("bannerTitle", "Banner标题不能为空。");
    valid = false;
  }
  if (!templateFormFields.bannerSubtitle.value.trim()) {
    setTemplateError("bannerSubtitle", "Banner副标题不能为空。");
    valid = false;
  }
  if (!templateFormFields.bannerButton.value.trim()) {
    setTemplateError("bannerButton", "Banner按钮文案不能为空。");
    valid = false;
  }
  if (isCommonQuestionnaireType && !templateFormFields.questionnaireTitle.value.trim()) {
    setTemplateError("questionnaireTitle", "问卷标题不能为空。");
    valid = false;
  }
  if (isCommonQuestionnaireType && !templateFormFields.questionnaireDescription.value.trim()) {
    setTemplateError("questionnaireDescription", "问卷描述不能为空。");
    valid = false;
  }
  if (questionnaireType === "分组问卷" && !templateFormFields.groupCount.value) {
    setTemplateError("groupCount", "分组数量不能为空。");
    valid = false;
  }
  if ((isPopupAppQuestionnaireType(questionnaireType) || isDesignQuestionnaireType(questionnaireType)) && !getSelectedLinkedQuestionnaires().length) {
    setTemplateError("linked", "关联完整问卷不能为空。");
    valid = false;
  }
  if (!hasVersion) {
    templateFormErrors.version.textContent = "投放版本不能为空。";
    templateFormErrors.version.classList.add("show");
    valid = false;
  } else if (versionInvalid) {
    templateFormErrors.version.textContent = "投放版本需先填写开始值，且结束值必须大于开始值。";
    templateFormErrors.version.classList.add("show");
    valid = false;
  }

  return valid;
}

function buildTemplateVersionText() {
  const versions = [];
  const androidStart = templateFormFields.androidVersion.value.trim();
  const androidEnd = templateFormFields.androidVersionEnd.value.trim();
  const iosStart = templateFormFields.iosVersion.value.trim();
  const iosEnd = templateFormFields.iosVersionEnd.value.trim();
  if (androidStart) versions.push(`Android > ${androidStart}${androidEnd ? ` ~ ${androidEnd}` : ""}`);
  if (iosStart) versions.push(`iOS > ${iosStart}${iosEnd ? ` ~ ${iosEnd}` : ""}`);
  return versions.join(", ") || "-";
}

function addTemplateQuestion() {
  if (isGlobalAppQuestionnaire()) return;
  templateQuestions.push(createDefaultQuestion(getDefaultQuestionType()));
  renderTemplateQuestionList();
  showToast("已新增问题。");
}

function summarizeTemplateQuestion(question) {
  if (question.type === "评分(全局)" || question.type === "评分(普通)" || question.type === "评分(功能/分组)") {
    const minDesc = question.scoreMinDesc.trim();
    const maxDesc = question.scoreMaxDesc.trim();
    let options = `1-${question.scoreRange}${minDesc || maxDesc ? `，${minDesc || "最小值"} / ${maxDesc || "最大值"}` : ""}`;
    if (question.type === "评分(全局)") {
      const guides = [question.lowScoreGuide, question.highScoreGuide, question.otherScoreGuide].map((item) => item.trim()).filter(Boolean);
      if (guides.length) options = `${options}，引导文案 ${guides.length} 条`;
    }
    return options;
  }
  if (question.type === "单选题" || question.type === "多选题") {
    return normalizeQuestionOptions(question.choiceOptions).map((option) => option.label).filter(Boolean).join(", ");
  }
  return `${question.required}，${question.charLimit} 字符`;
}

function validateTemplateQuestions() {
  let valid = true;
  if (!templateQuestions.length) {
    templateQuestions.push(createDefaultQuestion());
    valid = false;
  }

  templateQuestions = templateQuestions.map((question) => {
    const nextQuestion = { ...question, errors: {} };
    if (!nextQuestion.title.trim()) {
      nextQuestion.errors.title = "问题标题不能为空。";
      valid = false;
    }
    if ((nextQuestion.type === "单选题" || nextQuestion.type === "多选题") && !normalizeQuestionOptions(nextQuestion.choiceOptions).some((option) => option.label.trim())) {
      nextQuestion.errors.options = "选项不能为空。";
      valid = false;
    }
    return nextQuestion;
  });

  renderTemplateQuestionList();
  return valid;
}

function buildQuestionPayload(question) {
  const { errors, ...payload } = question;
  return {
    ...payload,
    choiceOptions: normalizeQuestionOptions(question.choiceOptions),
    options: summarizeTemplateQuestion(question),
  };
}

function getTemplateQuestion(index) {
  return templateQuestions[index] || null;
}

function updateTemplateQuestionField(target) {
  const questionIndex = Number(target.dataset.questionIndex);
  const field = target.dataset.questionField;
  const question = getTemplateQuestion(questionIndex);
  if (!question || !field) return;

  question.errors = {};
  const card = target.closest(".question-card");
  if (card) card.querySelectorAll(".question-error").forEach((error) => error.remove());
  if (field === "optionLabel") {
    const optionIndex = Number(target.dataset.optionIndex);
    const option = question.choiceOptions[optionIndex];
    if (!option || option.isOther) return;
    option.label = target.value;
    return;
  }

  question[field] = target.value;
  if (field === "type") {
    question.choiceOptions = normalizeQuestionOptions(question.choiceOptions);
    renderTemplateQuestionList();
  }
  if (field === "scoreRange") {
    renderTemplateQuestionList();
  }
}

function addQuestionOption(questionIndex, isOther = false) {
  const question = getTemplateQuestion(questionIndex);
  if (!question) return;
  const options = normalizeQuestionOptions(question.choiceOptions);
  const withoutOther = options.filter((option) => !option.isOther);
  const otherOption = options.find((option) => option.isOther);
  if (isOther) {
    question.choiceOptions = otherOption ? options : [...withoutOther, { label: "其他", isOther: true }];
  } else {
    question.choiceOptions = [...withoutOther, { label: "选项", isOther: false }, ...(otherOption ? [otherOption] : [])];
  }
  question.errors = {};
  renderTemplateQuestionList();
}

function removeQuestionOption(questionIndex, optionIndex) {
  const question = getTemplateQuestion(questionIndex);
  if (!question) return;
  const options = normalizeQuestionOptions(question.choiceOptions);
  options.splice(optionIndex, 1);
  question.choiceOptions = options.length ? options : [{ label: "选项", isOther: false }];
  question.errors = {};
  renderTemplateQuestionList();
}

function resetTemplateForm() {
  clearTemplateFormErrors();
  document.getElementById("templateForm").reset();
  templateFormFields.editingTemplateId.value = "";
  templateFormFields.channelApp.checked = true;
  templateFormFields.channelWeb.checked = false;
  updateTemplateChannelTrigger();
  setLinkedQuestionnaires([]);
  templateFormFields.popupCopy.innerHTML = "";
  savedRichTextRange = null;
  updateRichTextCount();
  updateQuestionnaireDescriptionCount();
  templateFormFields.questionnaireType.value = "";
  templateFormFields.scene.value = "";
  templateQuestions = [createDefaultQuestion()];
  renderTemplateQuestionList();
  updateQuestionnaireTypeByScene();
  setTemplateStep(1);
}

function fillTemplateVersionFields(versionText) {
  templateFormFields.androidVersion.value = "";
  templateFormFields.androidVersionEnd.value = "";
  templateFormFields.iosVersion.value = "";
  templateFormFields.iosVersionEnd.value = "";
  versionText.split(",").map((item) => item.trim()).forEach((item) => {
    const match = item.match(/^(Android|iOS)\s*>\s*([^~]+?)(?:\s*~\s*(.+))?$/i);
    if (!match) return;
    const start = match[2].trim();
    const end = match[3] ? match[3].trim() : "";
    if (match[1].toLowerCase() === "android") {
      templateFormFields.androidVersion.value = start;
      templateFormFields.androidVersionEnd.value = end;
    } else {
      templateFormFields.iosVersion.value = start;
      templateFormFields.iosVersionEnd.value = end;
    }
  });
}

function openTemplateForm(mode, templateId = "") {
  templateFormMode = mode;
  resetTemplateForm();
  setActiveNav("template");
  setTemplateLayout(true);
  hideAllMainPanels();
  document.getElementById("templateFormPanel").classList.add("active");
  document.querySelector(".breadcrumb").textContent = `NPS管理 / NPS问卷模板 / ${mode === "edit" ? "编辑模板" : "新增模板"}`;

  if (mode !== "edit") return;
  const template = npsTemplates.find((item) => item.template_id === templateId);
  if (!template) return;

  templateFormFields.editingTemplateId.value = template.template_id;
  templateFormFields.templateTitle.value = template.template_name;
  templateFormFields.scene.value = template.scene === "运动" ? "全局" : template.scene;
  const rawQuestionnaireType = getTemplateRawType(template);
  templateFormFields.questionnaireType.value = rawQuestionnaireType;
  updateQuestionnaireTypeByScene();
  templateFormFields.channelApp.checked = template.channel.includes("APP");
  templateFormFields.channelWeb.checked = template.channel.includes("WEB");
  updateTemplateChannelTrigger();
  templateFormFields.bannerTitle.value = template.banner_title || "";
  templateFormFields.bannerSubtitle.value = template.banner_subtitle || "";
  templateFormFields.bannerButton.value = template.banner_button || "";
  setLinkedQuestionnaires(template.linked_questionnaires || []);
  templateFormFields.popupCopy.innerHTML = template.popup_copy || "";
  updateRichTextCount();
  fillTemplateVersionFields(template.min_version || "");
  templateFormFields.questionnaireTitle.value = template.questionnaire_title || template.template_name;
  templateFormFields.questionnaireDescription.value = template.questionnaire_description || "";
  templateFormFields.questionnaireRemark.value = template.questionnaire_remark || "";
  templateFormFields.groupCount.value = template.group_count || "";
  updateQuestionnaireDescriptionCount();
  templateQuestions = template.questions && template.questions.length
    ? template.questions.map(normalizeTemplateQuestion)
    : [createDefaultQuestion()];
  renderTemplateQuestionList();
  updateTemplateTypePanel();
}

window.openTemplateForm = openTemplateForm;

function submitTemplateForm() {
  if (!validateTemplateStepOne()) {
    setTemplateStep(1);
    showToast("提交失败，请检查基础信息。");
    return;
  }

  const isDesignType = isDesignQuestionnaireType(templateFormFields.questionnaireType.value);
  if (!isDesignType && !validateTemplateQuestions()) {
    setTemplateStep(2);
    showToast("提交失败，请检查问卷问题。");
    return;
  }

  const templatePayload = {
    template_name: templateFormFields.templateTitle.value.trim(),
    channel: getSelectedTemplateChannels().join(", "),
    scene: templateFormFields.scene.value,
    raw_questionnaire_type: templateFormFields.questionnaireType.value,
    questionnaire_type: getTemplateDisplayType(templateFormFields.questionnaireType.value),
    detail_text: "查看",
    updated_at: formatDateMinute(new Date()),
    min_version: buildTemplateVersionText(),
    banner_title: templateFormFields.bannerTitle.value.trim(),
    banner_subtitle: templateFormFields.bannerSubtitle.value.trim(),
    banner_button: templateFormFields.bannerButton.value.trim(),
    linked_questionnaires: getSelectedLinkedQuestionnaires(),
    popup_copy: templateFormFields.popupCopy.innerHTML,
    questionnaire_title: templateFormFields.questionnaireTitle.value.trim(),
    questionnaire_description: templateFormFields.questionnaireDescription.value.trim(),
    questionnaire_remark: templateFormFields.questionnaireRemark.value.trim(),
    group_count: templateFormFields.groupCount.value,
    questions: isDesignType ? [] : templateQuestions.map(buildQuestionPayload),
  };

  if (templateFormMode === "edit") {
    const template = npsTemplates.find((item) => item.template_id === templateFormFields.editingTemplateId.value);
    if (!template) {
      showToast("提交失败，模板不存在。");
      return;
    }
    Object.assign(template, templatePayload);
    syncTemplateNameOptions(template.template_name);
    showToast("编辑模板成功。");
  } else {
    const newTemplate = {
      template_id: getNextId(npsTemplates, "template_id"),
      template_status: "有效",
      creator: "谢敏",
      ...templatePayload,
    };
    npsTemplates.push(newTemplate);
    syncTemplateNameOptions(newTemplate.template_name);
    showToast("新增模板成功。");
  }

  filteredTemplates = [...npsTemplates];
  renderTemplates(filteredTemplates);
  showTemplateList();
}

function openTemplateStatusDialog(templateId) {
  const template = npsTemplates.find((item) => item.template_id === templateId);
  if (!template) return;
  selectedTemplateStatusId = templateId;
  selectedTemplateStatusAction = template.template_status === "有效" ? "disable" : "enable";
  templateStatusConfirmText.textContent = selectedTemplateStatusAction === "disable" ? "确定需要将模板禁用吗？" : "确定需要将模板启动吗？";
  templateStatusLightbox.classList.add("show");
  templateStatusLightbox.setAttribute("aria-hidden", "false");
}

function closeTemplateStatusDialog() {
  selectedTemplateStatusId = null;
  selectedTemplateStatusAction = "";
  templateStatusLightbox.classList.remove("show");
  templateStatusLightbox.setAttribute("aria-hidden", "true");
}

function confirmTemplateStatusChange() {
  const template = npsTemplates.find((item) => item.template_id === selectedTemplateStatusId);
  if (!template) {
    closeTemplateStatusDialog();
    return;
  }
  if (selectedTemplateStatusAction === "disable" && template.template_status !== "有效") {
    closeTemplateStatusDialog();
    return;
  }
  if (selectedTemplateStatusAction === "enable" && template.template_status !== "无效") {
    closeTemplateStatusDialog();
    return;
  }

  template.template_status = selectedTemplateStatusAction === "disable" ? "无效" : "有效";
  template.updated_at = formatDateMinute(new Date());
  const toastText = selectedTemplateStatusAction === "disable" ? "已禁用模板。" : "已启用模板。";
  closeTemplateStatusDialog();
  applyTemplateFilters();
  showToast(toastText);
}

function openTemplateDetail(templateIdOrName) {
  const template = npsTemplates.find((item) => item.template_id === templateIdOrName || item.template_name === templateIdOrName);
  if (!template) {
    navigatePlaceholder("问卷模板详情页", templateIdOrName);
    return;
  }

  const questions = template.questions && template.questions.length
    ? template.questions.map((question, index) => `<li>${index + 1}. ${escapeText(question.type)}｜${escapeText(question.title)}${question.options ? `｜${escapeText(question.options)}` : ""}</li>`).join("")
    : "<li>暂无问题</li>";

  templateDetailBody.innerHTML = `
    <dl class="detail-grid">
      <dt>模板 ID</dt><dd>${escapeText(template.template_id)}</dd>
      <dt>模板名称</dt><dd>${escapeText(template.template_name)}</dd>
      <dt>状态</dt><dd>${escapeText(template.template_status)}</dd>
      <dt>可用渠道</dt><dd>${escapeText(template.channel)}</dd>
      <dt>业务场景</dt><dd>${escapeText(template.scene)}</dd>
      <dt>问卷类型</dt><dd>${escapeText(getTemplateDisplayType(getTemplateRawType(template)))}</dd>
      <dt>投放版本</dt><dd>${escapeText(template.min_version || "-")}</dd>
      <dt>关联问卷</dt><dd>${escapeText((template.linked_questionnaires || []).join("，") || "-")}</dd>
      <dt>弹窗文案</dt><dd>${template.popup_copy || "-"}</dd>
      <dt>创建者</dt><dd>${escapeText(template.creator)}</dd>
      <dt>更新时间</dt><dd>${escapeText(template.updated_at)}</dd>
    </dl>
    <ul class="detail-question-list">${questions}</ul>
  `;
  templateDetailLightbox.classList.add("show");
  templateDetailLightbox.setAttribute("aria-hidden", "false");
}

function closeTemplateDetail() {
  templateDetailLightbox.classList.remove("show");
  templateDetailLightbox.setAttribute("aria-hidden", "true");
}

document.getElementById("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  applyFilters();
});

document.getElementById("audienceSearchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  applyAudienceFilters();
});

document.getElementById("addBtn").addEventListener("click", () => openTaskForm("add"));
templateNav.addEventListener("click", showTemplateList);
taskNav.addEventListener("click", showTaskList);
document.getElementById("taskForm").addEventListener("submit", (event) => {
  event.preventDefault();
  submitTaskForm();
});
document.getElementById("cancelTaskBtn").addEventListener("click", showTaskList);

document.getElementById("templateSearchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  applyTemplateFilters();
});
document.getElementById("addTemplateBtn").addEventListener("click", () => openTemplateForm("add"));
document.getElementById("templateForm").addEventListener("submit", (event) => {
  event.preventDefault();
  submitTemplateForm();
});
document.getElementById("cancelTemplateFromStepOneBtn").addEventListener("click", showTemplateList);
document.getElementById("cancelTemplateBtn").addEventListener("click", showTemplateList);
document.getElementById("nextTemplateStepBtn").addEventListener("click", () => {
  if (validateTemplateStepOne()) setTemplateStep(2);
});
document.getElementById("prevTemplateStepBtn").addEventListener("click", () => setTemplateStep(1));
templateFormFields.channelTrigger.addEventListener("click", () => {
  templateFormFields.channelPanel.classList.toggle("open");
});
templateFormFields.channelApp.addEventListener("change", updateTemplateChannelTrigger);
templateFormFields.channelWeb.addEventListener("change", updateTemplateChannelTrigger);
templateFormFields.linkedTrigger.addEventListener("click", () => {
  templateFormFields.linkedPanel.classList.toggle("open");
});
[templateFormFields.linkedFull, templateFormFields.linkedGroup2, templateFormFields.linkedSurvey1, templateFormFields.linkedSurvey2].forEach((field) => {
  field.addEventListener("change", updateLinkedQuestionnaireTrigger);
});
templateFormFields.popupCopy.addEventListener("mouseup", saveRichTextSelection);
templateFormFields.popupCopy.addEventListener("keyup", saveRichTextSelection);
templateFormFields.popupCopy.addEventListener("input", updateRichTextCount);
templateFormFields.scene.addEventListener("change", updateQuestionnaireTypeByScene);
templateFormFields.questionnaireType.addEventListener("change", updateTemplateTypePanel);
document.getElementById("addQuestionBtn").addEventListener("click", addTemplateQuestion);

formFields.appTrigger.addEventListener("click", () => {
  if (formMode === "view" || formFields.appTrigger.disabled) return;
  formFields.appPanel.classList.toggle("open");
});
formFields.appClientApp.addEventListener("change", updateAppTrigger);
formFields.appClientWeb.addEventListener("change", updateAppTrigger);

document.getElementById("chooseFileBtn").addEventListener("click", () => {
  if (formMode === "view" || formFields.audienceFile.disabled) return;
  formFields.audienceFile.click();
});
formFields.audienceFile.addEventListener("change", () => {
  const fileNames = Array.from(formFields.audienceFile.files).map((file) => file.name);
  renderAudienceFiles([...new Set([...audienceUploadedFileNames, ...fileNames])]);
  formFields.audienceFile.value = "";
});
formFields.audienceFileList.addEventListener("click", (event) => {
  if (formMode === "view") return;
  const target = event.target;
  if (!(target instanceof HTMLElement) || !target.classList.contains("file-remove")) return;
  const fileIndex = Number(target.dataset.fileIndex);
  if (Number.isNaN(fileIndex)) return;
  const nextFiles = audienceUploadedFileNames.filter((_, index) => index !== fileIndex);
  renderAudienceFiles(nextFiles);
});

document.getElementById("templateForm").addEventListener("input", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  if (target.dataset.questionField) {
    updateTemplateQuestionField(target);
  }
  if (target === templateFormFields.popupCopy) {
    updateRichTextCount();
  }
  if (target === templateFormFields.questionnaireDescription) {
    updateQuestionnaireDescriptionCount();
  }
});

document.getElementById("templateForm").addEventListener("change", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  if (target.dataset.questionField) {
    updateTemplateQuestionField(target);
  }
});

document.getElementById("templateForm").addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  if (target.classList.contains("rich-button")) {
    applyRichTextCommand(target.dataset.command);
  }
  if (target.classList.contains("color-swatch")) {
    applyRichTextCommand("foreColor", target.dataset.color);
  }
  if (target.classList.contains("question-add-option")) {
    const questionIndex = Number(target.dataset.questionIndex);
    if (!Number.isNaN(questionIndex)) addQuestionOption(questionIndex);
  }
  if (target.classList.contains("question-add-other")) {
    const questionIndex = Number(target.dataset.questionIndex);
    if (!Number.isNaN(questionIndex)) addQuestionOption(questionIndex, true);
  }
  if (target.classList.contains("question-remove-option")) {
    const questionIndex = Number(target.dataset.questionIndex);
    const optionIndex = Number(target.dataset.optionIndex);
    if (!Number.isNaN(questionIndex) && !Number.isNaN(optionIndex)) removeQuestionOption(questionIndex, optionIndex);
  }
  if (target.classList.contains("question-remove")) {
    const index = Number(target.dataset.questionIndex);
    if (Number.isNaN(index)) return;
    templateQuestions.splice(index, 1);
    renderTemplateQuestionList();
  }
});

document.getElementById("addPlanBtn").addEventListener("click", () => {
  if (formMode === "view") return;
  formFields.newPlanName.value = "";
  clearError("newPlanName");
  planLightbox.classList.add("show");
  planLightbox.setAttribute("aria-hidden", "false");
});
document.getElementById("cancelPlanBtn").addEventListener("click", closePlanDialog);
document.getElementById("submitPlanBtn").addEventListener("click", submitNewPlan);

rangePicker.addEventListener("click", () => {
  if (!datePanel.classList.contains("open")) {
    syncDraftRangeFromInput();
  }
  datePanel.classList.toggle("open");
});

document.getElementById("prevMonth").addEventListener("click", () => {
  calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1);
  renderCalendar();
});

document.getElementById("nextMonth").addEventListener("click", () => {
  calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1);
  renderCalendar();
});

function handleCalendarGridClick(event) {
  const target = event.target;
  if (target instanceof HTMLElement && target.classList.contains("calendar-day")) {
    selectCalendarDate(target.dataset.date);
  }
}

leftCalendarGrid.addEventListener("click", handleCalendarGridClick);
rightCalendarGrid.addEventListener("click", handleCalendarGridClick);

document.addEventListener("click", (event) => {
  const dateField = document.querySelector(".date-field");
  if (!dateField.contains(event.target)) {
    datePanel.classList.remove("open");
  }
  if (!formFields.appPanel.contains(event.target) && event.target !== formFields.appTrigger) {
    formFields.appPanel.classList.remove("open");
  }
  if (!templateFormFields.channelPanel.contains(event.target) && event.target !== templateFormFields.channelTrigger) {
    templateFormFields.channelPanel.classList.remove("open");
  }
  if (!templateFormFields.linkedPanel.contains(event.target) && event.target !== templateFormFields.linkedTrigger) {
    templateFormFields.linkedPanel.classList.remove("open");
  }

  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  if (target.classList.contains("pause-link") && !target.hasAttribute("disabled")) {
    openPause(target.dataset.taskId);
  }
  if (target.classList.contains("view-link")) {
    openTaskForm("view", target.dataset.taskId);
  }
  if (target.classList.contains("edit-link")) {
    openTaskForm("edit", target.dataset.taskId);
  }
  if (target.classList.contains("audience-link")) {
    openAudiencePage(target.dataset.taskId);
  }
  if (target.classList.contains("template-link")) {
    openTemplateDetail(target.dataset.template);
  }
  if (target.classList.contains("template-detail-link")) {
    openTemplateDetail(target.dataset.templateId);
  }
  if (target.classList.contains("edit-template-link")) {
    openTemplateForm("edit", target.dataset.templateId);
  }
  if (target.classList.contains("toggle-template-link")) {
    openTemplateStatusDialog(target.dataset.templateId);
  }
});

document.getElementById("confirmPause").addEventListener("click", confirmPause);
document.getElementById("cancelPause").addEventListener("click", closePause);
pauseLightbox.addEventListener("click", (event) => {
  if (event.target === pauseLightbox) closePause();
});
document.getElementById("confirmTemplateStatus").addEventListener("click", confirmTemplateStatusChange);
document.getElementById("cancelTemplateStatus").addEventListener("click", closeTemplateStatusDialog);
templateStatusLightbox.addEventListener("click", (event) => {
  if (event.target === templateStatusLightbox) closeTemplateStatusDialog();
});
planLightbox.addEventListener("click", (event) => {
  if (event.target === planLightbox) closePlanDialog();
});
document.getElementById("closeTemplateDetail").addEventListener("click", closeTemplateDetail);
templateDetailLightbox.addEventListener("click", (event) => {
  if (event.target === templateDetailLightbox) closeTemplateDetail();
});

renderRows(filteredTasks);
renderTemplates(filteredTemplates);
renderPlanOptions();
renderTemplateOptions();
updateTemplateChannelTrigger();
updateTemplateTypePanel();

if (window.location.hash === "#nps-task") {
  showTaskList();
} else if (window.location.hash === "#nps-audience") {
  openAudiencePage("");
} else {
  showTemplateList();
}
populateHourOptions(formFields.startHour);
populateHourOptions(formFields.endHour);
updateAppTrigger();
updateRangeTrigger();
syncDraftRangeFromInput();
