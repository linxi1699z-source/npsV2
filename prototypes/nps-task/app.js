const tasks = [
  {
    task_id: "10001",
    task_name: "全局NPS6月任务",
    task_status: "初始状态",
    task_scene: "睡眠",
    delivery_region: "国内",
    audience_link_text: "查看",
    app_client: "APP",
    start_time: "2026-06-28 09",
    end_time: "2026-07-20 18",
    template_name: "睡眠NPS模板",
    plan_id: "10001",
    plan_name: "睡眠 NPS 计划",
    total_users: "100,000",
    actual_delivery_users: "0",
    exposed_users: "0",
    nps_estimate: "",
    nps_promoters: "0",
    nps_passives: "0",
    nps_detractors: "0",
    nps_updated_at: "",
  },
  {
    task_id: "10002",
    task_name: "OSA NPS投放任务",
    task_status: "投放中",
    task_scene: "OSA",
    delivery_region: "海外",
    audience_link_text: "查看",
    app_client: "APP",
    start_time: "2026-06-20 10",
    end_time: "2026-07-10 20",
    template_name: "OSA问卷模板",
    plan_id: "10002",
    plan_name: "OSA 体验计划",
    total_users: "80,000",
    actual_delivery_users: "42,000",
    exposed_users: "21,500",
    nps_estimate: "46",
    nps_promoters: "9,600",
    nps_passives: "4,100",
    nps_detractors: "2,300",
    nps_updated_at: "2026-07-08",
  },
  {
    task_id: "10003",
    task_name: "血压NPS7月任务",
    task_status: "投放完成",
    task_scene: "血压",
    delivery_region: "所有区域",
    audience_link_text: "查看",
    app_client: "APP",
    start_time: "2026-06-01 09",
    end_time: "2026-06-30 18",
    template_name: "血压NPS模板",
    plan_id: "10003",
    plan_name: "血压 NPS 计划",
    total_users: "50,000",
    actual_delivery_users: "50,000",
    exposed_users: "38,600",
    nps_estimate: "30",
    nps_promoters: "15,000",
    nps_passives: "9,000",
    nps_detractors: "6,000",
    nps_updated_at: "2026-07-08",
  },
  {
    task_id: "10004",
    task_name: "AI Partner 满意度任务",
    task_status: "投放失败",
    task_scene: "AI Partner",
    delivery_region: "海外",
    audience_link_text: "查看",
    app_client: "Web",
    start_time: "2026-06-15 10",
    end_time: "2026-07-15 19",
    template_name: "AI Partner模板",
    plan_id: "10004",
    plan_name: "AI Partner 计划",
    total_users: "30,000",
    actual_delivery_users: "8,200",
    exposed_users: "3,900",
    nps_estimate: "",
    nps_promoters: "0",
    nps_passives: "0",
    nps_detractors: "0",
    nps_updated_at: "",
  },
  {
    task_id: "10005",
    task_name: "生理周期NPS任务",
    task_status: "暂停",
    task_scene: "生理",
    delivery_region: "国内",
    audience_link_text: "查看",
    app_client: "APP",
    start_time: "2026-06-10 09",
    end_time: "2026-07-31 18",
    template_name: "生理NPS模板",
    plan_id: "10005",
    plan_name: "生理 NPS 计划",
    total_users: "60,000",
    actual_delivery_users: "12,000",
    exposed_users: "6,100",
    nps_estimate: "",
    nps_promoters: "0",
    nps_passives: "0",
    nps_detractors: "0",
    nps_updated_at: "",
  },
  {
    task_id: "10006",
    task_name: "计划模块NPS任务",
    task_status: "初始状态",
    task_scene: "计划",
    delivery_region: "所有区域",
    audience_link_text: "查看",
    app_client: "APP",
    start_time: "2026-07-01 08",
    end_time: "2026-07-31 18",
    template_name: "计划NPS模板",
    plan_id: "10006",
    plan_name: "计划 NPS 计划",
    total_users: "90,000",
    actual_delivery_users: "0",
    exposed_users: "0",
    nps_estimate: "",
    nps_promoters: "0",
    nps_passives: "0",
    nps_detractors: "0",
    nps_updated_at: "",
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

const DEFAULT_TEMPLATE_BANNER = {
  title: "喜欢RingConn吗？来评分吧！",
  subtitle: "您的声音，我们的动力。",
  button: "去评分！",
};

const DEFAULT_DESIGN_POPUP_COPY = `We're always working to improve Ring Conn by seeing things from your
perspective. Your honest feedback really matters to us. Are the charts easy to
read? Does the data make sense? Does everything feel intuitive? Take this
quick survey about our new design and help us make RingConn everbetter for
you.`;

const DEFAULT_GLOBAL_APP_QUESTIONS = [
  {
    type: "评分(全局)",
    title: "您有多大可能会向朋友或者同时推荐RingConn?",
    subtitle: "",
    scoreRange: "10",
    scoreMinDesc: "不推荐",
    scoreMaxDesc: "非常推荐",
    lowScoreGuide: "我们有哪些做的不好的地方？",
    highScoreGuide: "我们有哪些做得好的地方?",
    otherScoreGuide: "我们有哪些值得改进的地方?",
    required: "必填",
    charLimit: "500",
    choiceOptions: [{ label: "选项", isOther: false }],
    errors: {},
  },
  {
    type: "多选题",
    title: "我们有哪些值得改进的地方?",
    subtitle: "",
    scoreRange: "10",
    scoreMinDesc: "",
    scoreMaxDesc: "",
    lowScoreGuide: "",
    highScoreGuide: "",
    otherScoreGuide: "",
    required: "必填",
    charLimit: "500",
    choiceOptions: [
      { label: "戒指外观设计与质感", isOther: false },
      { label: "佩戴舒适度与尺寸", isOther: false },
      { label: "续航与充电体验", isOther: false },
      { label: "戒指质量与耐用度", isOther: false },
      { label: "App使用流畅度", isOther: false },
      { label: "App界面易读性", isOther: false },
      { label: "核心功能价值", isOther: false },
      { label: "数据监测准确性", isOther: false },
      { label: "数据解读帮助性", isOther: false },
      { label: "售后体验", isOther: false },
    ],
    errors: {},
  },
];

const I18N_LANGUAGES = [
  { key: "zh_cn", label: "中文", previewLabel: "中文" },
  { key: "zh_tw", label: "繁体中文", previewLabel: "繁体中文" },
  { key: "en", label: "英文", previewLabel: "英语" },
  { key: "ja", label: "日本语", previewLabel: "日本语" },
  { key: "de", label: "德语", previewLabel: "德语" },
  { key: "es", label: "西班牙语", previewLabel: "西班牙语" },
  { key: "fr", label: "法语", previewLabel: "法语" },
  { key: "ar", label: "阿拉伯语", previewLabel: "阿拉伯语" },
  { key: "cs", label: "捷克语", previewLabel: "捷克语" },
  { key: "tr", label: "土耳其", previewLabel: "土耳其" },
  { key: "pl", label: "波兰语", previewLabel: "波兰语" },
  { key: "fi", label: "芬兰语", previewLabel: "芬兰语" },
  { key: "it", label: "意大利语", previewLabel: "意大利语" },
  { key: "hu", label: "匈牙利语", previewLabel: "匈牙利语" },
  { key: "ro", label: "罗马尼亚语", previewLabel: "罗马尼亚语" },
  { key: "ko", label: "韩语", previewLabel: "韩语" },
  { key: "lt", label: "立陶宛语", previewLabel: "立陶宛语" },
  { key: "ms", label: "马来语", previewLabel: "马来语" },
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
    linked_questionnaires: ["NPS分组问卷-监测准确性", "NPS分组问卷-App设计体验", "NPS分组问卷-渠道与改进"],
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
    raw_questionnaire_type: "弹窗问卷(设计)",
    questionnaire_type: "弹窗问卷(设计)",
    detail_text: "查看",
    creator: "谢敏",
    updated_at: "2026-06-23 15:40",
    min_version: "Android > V4.2, iOS > V4.2",
    page_size: "5",
    questions: [
      { type: "评分(普通)", title: "您对当前 UI 体验满意吗？", subtitle: "", options: "1-10" },
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
    template_id: "10008",
    template_name: "NPS分组问卷-监测准确性",
    template_status: "有效",
    channel: "APP",
    scene: "全局",
    raw_questionnaire_type: "分组问卷",
    questionnaire_type: "分组问卷",
    detail_text: "查看",
    creator: "谢敏",
    updated_at: "2026-07-09 16:20",
    min_version: "Android > V4.2, iOS > V4.2",
    questionnaire_title: "问卷",
    questionnaire_description: "根据您的使用感受，是否认同以下描述？",
    questionnaire_remark: "5=非常认同，1=非常不认同",
    questions: [
      { type: "评分(普通)", title: "睡眠监测数据准确", subtitle: "", options: "1-5" },
      { type: "评分(普通)", title: "活动监测数据准确", subtitle: "", options: "1-5" },
      { type: "评分(普通)", title: "压力监测数据准确", subtitle: "", options: "1-5" },
      { type: "评分(普通)", title: "生命体征监测数据准确", subtitle: "", options: "1-5" },
    ],
  },
  {
    template_id: "10007",
    template_name: "NPS分组问卷-App设计体验",
    template_status: "有效",
    channel: "APP",
    scene: "全局",
    raw_questionnaire_type: "分组问卷",
    questionnaire_type: "分组问卷",
    detail_text: "查看",
    creator: "谢敏",
    updated_at: "2026-07-09 16:10",
    min_version: "Android > V4.2, iOS > V4.2",
    questionnaire_title: "问卷",
    questionnaire_description: "根据您对App的设计感受，是否认同以下描述？",
    questionnaire_remark: "5=非常认同，1=非常不认同",
    questions: [
      { type: "评分(普通)", title: "操作流程顺畅，符合逻辑", subtitle: "", options: "1-5" },
      { type: "评分(普通)", title: "想找的东西都很容易找到", subtitle: "", options: "1-5" },
      { type: "评分(普通)", title: "文案话术描述清晰准确，易于理解", subtitle: "", options: "1-5" },
      { type: "评分(普通)", title: "图表信息清晰易懂", subtitle: "", options: "1-5" },
      { type: "评分(普通)", title: "字体字号大小合适，便于阅读", subtitle: "", options: "1-5" },
    ],
  },
  {
    template_id: "10006",
    template_name: "NPS分组问卷-渠道与改进",
    template_status: "有效",
    channel: "APP",
    scene: "全局",
    raw_questionnaire_type: "分组问卷",
    questionnaire_type: "分组问卷",
    detail_text: "查看",
    creator: "谢敏",
    updated_at: "2026-07-09 16:00",
    min_version: "Android > V4.2, iOS > V4.2",
    questionnaire_title: "问卷",
    questionnaire_description: "",
    questionnaire_remark: "",
    questions: [
      {
        type: "多选题",
        title: "您是通过哪种方式了解到RingConn的？",
        subtitle: "",
        choiceOptions: [
          { label: "自发搜索", isOther: false },
          { label: "亲友推荐", isOther: false },
          { label: "广告信息", isOther: false },
          { label: "网络分享/推荐", isOther: false },
          { label: "随机尝试/体验", isOther: false },
        ],
      },
      {
        type: "多选题",
        title: "您是通过哪个渠道购买了我们的产品？",
        subtitle: "",
        choiceOptions: [
          { label: "天猫", isOther: false },
          { label: "京东", isOther: false },
          { label: "得物", isOther: false },
          { label: "小红书", isOther: false },
          { label: "微信小程序", isOther: false },
          { label: "线下门店", isOther: false },
          { label: "其他渠道", isOther: true, otherPrompt: "请填写其他渠道信息", charLimit: "1000" },
        ],
      },
      {
        type: "开放题",
        title: "您觉得我们在哪方面还需要改进？",
        subtitle: "如：预测更准、建议更个性化，界面更清晰等",
        required: "选填",
        charLimit: "2000",
      },
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
let selectedTaskStatusAction = "";
let selectedTemplateStatusId = null;
let selectedTemplateStatusAction = "";
let exportTimer = null;
let formMode = "add";
let currentAudienceTaskId = "";
let filteredAudienceUsers = [...audienceUsers];
let audienceUploadedFileNames = [];
let templateFormMode = "add";
let templateStep = 1;
let templateQuestions = [];
let templateGroupCreationContext = null;
let savedRichTextRange = null;
let currentI18nTemplateId = "";
let currentI18nLanguage = "zh_cn";
let currentI18nGroupIndex = 0;
let i18nUploadTimer = null;

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
const taskRegion = document.getElementById("taskRegion");
const taskStatus = document.getElementById("taskStatus");
const taskDateRange = document.getElementById("taskDateRange");
const audienceRingconnIdSearch = document.getElementById("audienceRingconnIdSearch");
const templateNameSearch = document.getElementById("templateNameSearch");
const templateStatusSearch = document.getElementById("templateStatusSearch");
const templateSceneSearch = document.getElementById("templateSceneSearch");
const templateTypeSearch = document.getElementById("templateTypeSearch");
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
const exportLightbox = document.getElementById("exportLightbox");
const npsEstimateLightbox = document.getElementById("npsEstimateLightbox");
const npsEstimateBody = document.getElementById("npsEstimateBody");
const i18nRows = document.getElementById("i18nRows");
const i18nLanguageTabs = document.getElementById("i18nLanguageTabs");
const i18nPreviewCard = document.getElementById("i18nPreviewCard");
const i18nFileInput = document.getElementById("i18nFileInput");
const i18nLoading = document.getElementById("i18nLoading");
const toast = document.getElementById("toast");
const formFields = {
  editingTaskId: document.getElementById("editingTaskId"),
  taskName: document.getElementById("formTaskName"),
  planName: document.getElementById("formPlanName"),
  taskScene: document.getElementById("formTaskScene"),
  taskRegion: document.getElementById("formTaskRegion"),
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
  versionRow: document.getElementById("templateVersionRow"),
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
  createGroupButton: document.getElementById("createGroupQuestionnaireBtn"),
  pageSize: document.getElementById("pageSize"),
  popupCopy: document.getElementById("popupCopy"),
  questionnaireDescription: document.getElementById("questionnaireDescription"),
  questionnaireDescriptionCount: document.getElementById("questionnaireDescriptionCount"),
  questionnaireRemark: document.getElementById("questionnaireRemark"),
  questionnaireTitle: document.getElementById("questionnaireTitle"),
  questionRepeater: document.getElementById("questionRepeater"),
};
const formErrors = {
  taskName: document.getElementById("formTaskNameError"),
  planName: document.getElementById("formPlanNameError"),
  taskScene: document.getElementById("formTaskSceneError"),
  taskRegion: document.getElementById("formTaskRegionError"),
  startTime: document.getElementById("formStartTimeError"),
  endTime: document.getElementById("formEndTimeError"),
  appClient: document.getElementById("formAppClientError"),
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
  pageSize: document.getElementById("formPageSizeError"),
  version: document.getElementById("formTemplateVersionError"),
  questionnaireTitle: document.getElementById("formQuestionnaireTitleError"),
  questionnaireDescription: document.getElementById("formQuestionnaireDescriptionError"),
};

let calendarMonth = new Date(2026, 5, 1);
let draftStart = null;
let draftEnd = null;
const defaultCalendarMonth = new Date(2026, 5, 1);

function canPause(task) {
  return task.task_status === "初始状态" || task.task_status === "投放中";
}

function canEnableTask(task) {
  return task.task_status === "暂停";
}

function canEditTask(task) {
  return task.task_status === "初始状态";
}

function canExportTask(task) {
  return task.task_status === "投放完成";
}

function canShowNpsEstimate(task) {
  return (task.task_status === "投放中" || task.task_status === "投放完成") && task.nps_estimate !== "";
}

function isTaskEnded(task) {
  return new Date() >= parseTaskDateTime(task.end_time, true);
}

function getNpsInterpretation(value) {
  const score = Number(value);
  if (Number.isNaN(score)) return "";
  if (score >= 70) return "卓越";
  if (score >= 30) return "优秀";
  if (score > 0) return "良好";
  return "待改善";
}

function formatNpsEstimate(value) {
  if (value === "") return "-";
  const interpretation = getNpsInterpretation(value);
  return interpretation ? `${value}(${interpretation})` : value;
}

function getStatusClass(status) {
  const statusMap = {
    有效: "status-success",
    无效: "status-error",
    初始状态: "status-info",
    投放中: "status-warning",
    投放完成: "status-success",
    投放失败: "status-error",
    暂停: "status-default",
  };
  return statusMap[status] || "status-default";
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
    const statusClass = getStatusClass(template.template_status);
    const templateType = getTemplateDisplayType(getTemplateRawType(template));
    const i18nDisabled = isPopupAppQuestionnaireType(templateType);
    const i18nStatus = i18nDisabled ? "--" : (template.i18n_uploaded ? "已上传" : "未上传");
    return `
      <tr data-template-id="${escapeText(template.template_id)}">
        <td>${escapeText(template.template_id)}</td>
        <td>${escapeText(template.template_name)}</td>
        <td><span class="status-pill ${statusClass}">${escapeText(template.template_status)}</span></td>
        <td>${escapeText(template.channel)}</td>
        <td>${escapeText(template.scene)}</td>
        <td>${escapeText(templateType)}</td>
        <td>${escapeText(template.min_version || "-")}</td>
        <td>${escapeText(i18nStatus)}</td>
        <td>${escapeText(template.creator)}</td>
        <td>${escapeText(template.updated_at)}</td>
        <td>
          <div class="table-actions">
            <button class="table-action-button is-primary template-i18n-link" type="button" data-template-id="${escapeText(template.template_id)}" ${i18nDisabled ? "disabled" : ""}>配置多语言</button>
            <button class="table-action-button is-primary edit-template-link" type="button" data-template-id="${escapeText(template.template_id)}">编辑模板</button>
            <button class="table-action-button ${disabled ? "is-success" : "is-danger"} toggle-template-link" type="button" data-template-id="${escapeText(template.template_id)}">${disabled ? "启用" : "禁用"}</button>
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
  const typeValue = templateTypeSearch.value;

  filteredTemplates = npsTemplates.filter((template) => {
    const nameOk = !nameValue || template.template_name.includes(nameValue);
    const statusOk = statusValue === "所有状态" || template.template_status === statusValue;
    const sceneOk = sceneValue === "所有业务场景" || template.scene === sceneValue;
    const templateType = getTemplateDisplayType(getTemplateRawType(template));
    const typeOk = typeValue === "所有问卷类型" || templateType === typeValue;
    return nameOk && statusOk && sceneOk && typeOk;
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
    const enableVisible = canEnableTask(task);
    const editDisabled = !canEditTask(task);
    const exportDisabled = !canExportTask(task);
    const hasNpsEstimate = canShowNpsEstimate(task);
    const statusClass = getStatusClass(task.task_status);
    return `
      <tr data-task-id="${escapeText(task.task_id)}">
        <td>${escapeText(task.task_id)}</td>
        <td>${escapeText(task.task_name)}</td>
        <td><span class="status-pill ${statusClass}">${escapeText(task.task_status)}</span></td>
        <td>${escapeText(task.task_scene)}</td>
        <td>${escapeText(task.delivery_region || "所有区域")}</td>
        <td><button class="link-button audience-link" type="button" data-task-id="${escapeText(task.task_id)}">${escapeText(task.audience_link_text)}</button></td>
        <td>${escapeText(task.app_client)}</td>
        <td>${escapeText(task.start_time)}</td>
        <td>${escapeText(task.end_time)}</td>
        <td><button class="link-button template-link" type="button" data-template="${escapeText(task.template_name)}">${escapeText(task.template_name)}</button></td>
        <td>${escapeText(task.plan_name)}</td>
        <td>${escapeText(task.total_users)}</td>
        <td>${escapeText(task.actual_delivery_users)}</td>
        <td>${escapeText(task.exposed_users)}</td>
        <td>${hasNpsEstimate ? `<button class="link-button nps-estimate-link" type="button" data-task-id="${escapeText(task.task_id)}">${escapeText(formatNpsEstimate(task.nps_estimate))}</button>` : "-"}</td>
        <td>
          <div class="table-actions">
            <button class="table-action-button is-primary copy-link" type="button" data-task-id="${escapeText(task.task_id)}">复制</button>
            <button class="table-action-button is-primary edit-link" type="button" data-task-id="${escapeText(task.task_id)}" ${editDisabled ? "disabled" : ""}>编辑</button>
            <button class="table-action-button is-primary export-link" type="button" data-task-id="${escapeText(task.task_id)}" ${exportDisabled ? "disabled" : ""}>导出</button>
            ${enableVisible
              ? `<button class="table-action-button is-success enable-link" type="button" data-task-id="${escapeText(task.task_id)}">启用</button>`
              : `<button class="table-action-button is-danger pause-link" type="button" data-task-id="${escapeText(task.task_id)}" ${pauseDisabled ? "disabled" : ""}>暂停</button>`}
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
  const regionValue = taskRegion.value;
  const statusValue = taskStatus.value;

  filteredTasks = tasks.filter((task) => {
    const nameOk = !nameValue || task.task_name.includes(nameValue);
    const sceneOk = sceneValue === "所有" || task.task_scene === sceneValue;
    const regionOk = regionValue === "所有区域" || (task.delivery_region || "所有区域") === regionValue;
    const statusOk = statusValue === "所有" || task.task_status === statusValue;
    const dateOk = intersectsRange(task, range);
    return nameOk && sceneOk && regionOk && statusOk && dateOk;
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
  document.querySelector(".breadcrumb").textContent = "NPS管理 / NPS任务列表 / 投放人群";
  filteredAudienceUsers = getAudienceBaseRows();
  renderAudienceRows(filteredAudienceUsers);
  if (window.location.hash !== "#nps-audience") {
    window.location.hash = "nps-audience";
  }
}

function openPause(taskId) {
  selectedPauseTaskId = taskId;
  selectedTaskStatusAction = "pause";
  document.getElementById("pauseTitle").textContent = "确认暂停任务吗？暂停后将不会给用户投放问卷。";
  pauseLightbox.classList.add("show");
  pauseLightbox.setAttribute("aria-hidden", "false");
}

function openEnableTask(taskId) {
  selectedPauseTaskId = taskId;
  selectedTaskStatusAction = "enable";
  document.getElementById("pauseTitle").textContent = "确认启用任务吗？启用后将会给用户继续投放问卷。";
  pauseLightbox.classList.add("show");
  pauseLightbox.setAttribute("aria-hidden", "false");
}

function closePause() {
  selectedPauseTaskId = null;
  selectedTaskStatusAction = "";
  pauseLightbox.classList.remove("show");
  pauseLightbox.setAttribute("aria-hidden", "true");
}

function confirmPause() {
  const task = tasks.find((item) => item.task_id === selectedPauseTaskId);
  if (task && selectedTaskStatusAction === "pause" && canPause(task)) {
    task.task_status = "暂停";
  } else if (task && selectedTaskStatusAction === "enable" && canEnableTask(task)) {
    if (isTaskEnded(task)) {
      closePause();
      showToast("任务已结束，无法启用");
      return;
    }
    task.task_status = "初始状态";
  }
  closePause();
  applyFilters();
}

function showToast(message) {
  toast.innerHTML = `<span class="toast-success-icon">✓</span><span>${escapeText(message)}</span>`;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

function sanitizeFileName(value) {
  return value.replace(/[\\/:*?"<>|]/g, "_");
}

function escapeXml(value) {
  return String(value).replace(/[<>&"']/g, (char) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    '"': "&quot;",
    "'": "&apos;",
  })[char]);
}

function encodeUtf8(value) {
  return new TextEncoder().encode(value);
}

function createCrc32Table() {
  return Array.from({ length: 256 }, (_, index) => {
    let crc = index;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = crc & 1 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1;
    }
    return crc >>> 0;
  });
}

const CRC32_TABLE = createCrc32Table();

function crc32(bytes) {
  let crc = 0xffffffff;
  bytes.forEach((byte) => {
    crc = CRC32_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  });
  return (crc ^ 0xffffffff) >>> 0;
}

function writeUint16(bytes, value) {
  bytes.push(value & 0xff, (value >>> 8) & 0xff);
}

function writeUint32(bytes, value) {
  bytes.push(value & 0xff, (value >>> 8) & 0xff, (value >>> 16) & 0xff, (value >>> 24) & 0xff);
}

function createZip(files) {
  const output = [];
  const centralDirectory = [];
  let offset = 0;

  files.forEach((file) => {
    const nameBytes = encodeUtf8(file.name);
    const contentBytes = encodeUtf8(file.content);
    const checksum = crc32(contentBytes);
    const localHeader = [];
    writeUint32(localHeader, 0x04034b50);
    writeUint16(localHeader, 20);
    writeUint16(localHeader, 0);
    writeUint16(localHeader, 0);
    writeUint16(localHeader, 0);
    writeUint16(localHeader, 0);
    writeUint32(localHeader, checksum);
    writeUint32(localHeader, contentBytes.length);
    writeUint32(localHeader, contentBytes.length);
    writeUint16(localHeader, nameBytes.length);
    writeUint16(localHeader, 0);
    output.push(...localHeader, ...nameBytes, ...contentBytes);

    const centralHeader = [];
    writeUint32(centralHeader, 0x02014b50);
    writeUint16(centralHeader, 20);
    writeUint16(centralHeader, 20);
    writeUint16(centralHeader, 0);
    writeUint16(centralHeader, 0);
    writeUint16(centralHeader, 0);
    writeUint16(centralHeader, 0);
    writeUint32(centralHeader, checksum);
    writeUint32(centralHeader, contentBytes.length);
    writeUint32(centralHeader, contentBytes.length);
    writeUint16(centralHeader, nameBytes.length);
    writeUint16(centralHeader, 0);
    writeUint16(centralHeader, 0);
    writeUint16(centralHeader, 0);
    writeUint16(centralHeader, 0);
    writeUint32(centralHeader, 0);
    writeUint32(centralHeader, offset);
    centralDirectory.push(...centralHeader, ...nameBytes);
    offset = output.length;
  });

  const centralDirectoryOffset = output.length;
  output.push(...centralDirectory);
  const endRecord = [];
  writeUint32(endRecord, 0x06054b50);
  writeUint16(endRecord, 0);
  writeUint16(endRecord, 0);
  writeUint16(endRecord, files.length);
  writeUint16(endRecord, files.length);
  writeUint32(endRecord, centralDirectory.length);
  writeUint32(endRecord, centralDirectoryOffset);
  writeUint16(endRecord, 0);
  output.push(...endRecord);
  return new Blob([new Uint8Array(output)], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
}

function buildI18nXlsxBlob(template) {
  const headers = ["key", "中文名", ...I18N_LANGUAGES.map((language) => language.label)];
  const sheetRows = [
    headers,
    ...getTemplateI18nRows(template).map((row) => [
      row.key,
      row.name,
      ...I18N_LANGUAGES.map((language) => translateI18nValue(row.value, language.key)),
    ]),
  ];
  const sheetData = sheetRows.map((row, rowIndex) => `
    <row r="${rowIndex + 1}">
      ${row.map((cell, cellIndex) => {
        const column = String.fromCharCode(65 + cellIndex);
        return `<c r="${column}${rowIndex + 1}" t="inlineStr"><is><t>${escapeXml(cell)}</t></is></c>`;
      }).join("")}
    </row>
  `).join("");
  const worksheet = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
      <sheetData>${sheetData}</sheetData>
    </worksheet>`;
  const workbook = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
      <sheets><sheet name="多语言模板" sheetId="1" r:id="rId1"/></sheets>
    </workbook>`;
  const workbookRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
      <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
    </Relationships>`;
  const rootRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
      <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
    </Relationships>`;
  const contentTypes = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
      <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
      <Default Extension="xml" ContentType="application/xml"/>
      <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
      <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
    </Types>`;
  return createZip([
    { name: "[Content_Types].xml", content: contentTypes },
    { name: "_rels/.rels", content: rootRels },
    { name: "xl/workbook.xml", content: workbook },
    { name: "xl/_rels/workbook.xml.rels", content: workbookRels },
    { name: "xl/worksheets/sheet1.xml", content: worksheet },
  ]);
}

function downloadI18nTemplate() {
  const template = getCurrentI18nTemplate();
  if (!template) return;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(buildI18nXlsxBlob(template));
  link.download = `${sanitizeFileName(template.template_name)}多语言模板.xlsx`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function buildExportWorkbook(task) {
  const rows = [
    ["任务ID", task.task_id],
    ["任务名称", task.task_name],
    ["任务状态", task.task_status],
    ["投放用户数", task.actual_delivery_users],
    ["曝光用户数", task.exposed_users],
    ["预估NPS", formatNpsEstimate(task.nps_estimate)],
    ["9-10分用户数", task.nps_promoters || "0"],
    ["7-8分用户数", task.nps_passives || "0"],
    ["0-6分用户数", task.nps_detractors || "0"],
  ];
  const cells = rows.map(([label, value]) => `<tr><td>${escapeText(label)}</td><td>${escapeText(value)}</td></tr>`).join("");
  return `<!doctype html><html><head><meta charset="UTF-8"></head><body><table>${cells}</table></body></html>`;
}

function triggerTaskExport(task) {
  const blob = new Blob([`\ufeff${buildExportWorkbook(task)}`], {
    type: "application/vnd.ms-excel;charset=utf-8",
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${sanitizeFileName(task.task_name)}_用户回复情况.xlsx`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.setTimeout(() => URL.revokeObjectURL(link.href), 0);
}

function openExportDialog(taskId) {
  const task = tasks.find((item) => item.task_id === taskId);
  if (!task) return;
  if (!canExportTask(task)) {
    showToast("仅投放完成状态允许导出。");
    return;
  }
  exportLightbox.classList.add("show");
  exportLightbox.setAttribute("aria-hidden", "false");
  window.clearTimeout(exportTimer);
  exportTimer = window.setTimeout(() => {
    triggerTaskExport(task);
    exportLightbox.classList.remove("show");
    exportLightbox.setAttribute("aria-hidden", "true");
    showToast("导出文件已加入浏览器下载队列。");
  }, 1000);
}

function closeNpsEstimate() {
  npsEstimateLightbox.classList.remove("show");
  npsEstimateLightbox.setAttribute("aria-hidden", "true");
}

function openNpsEstimate(taskId) {
  const task = tasks.find((item) => item.task_id === taskId);
  if (!task || !canShowNpsEstimate(task)) return;
  const npsInterpretation = getNpsInterpretation(task.nps_estimate);
  npsEstimateBody.innerHTML = `
    <div class="nps-score-block">
      <div class="nps-score-value">${escapeText(formatNpsEstimate(task.nps_estimate))}</div>
      <div class="nps-score-desc">截止 ${escapeText(task.nps_updated_at || "2026-07-08")} 预估值</div>
      <div class="nps-score-desc">参考 Bain & Company NPS 分段：${escapeText(npsInterpretation || "-")}</div>
    </div>
    <dl class="nps-detail-grid">
      <dt>问卷填写用户数</dt>
      <dd>${escapeText(task.actual_delivery_users)}</dd>
      <dt>9-10 分用户数</dt>
      <dd>${escapeText(task.nps_promoters || "0")}</dd>
      <dt>7-8 分用户数</dt>
      <dd>${escapeText(task.nps_passives || "0")}</dd>
      <dt>0-6 分用户数</dt>
      <dd>${escapeText(task.nps_detractors || "0")}</dd>
    </dl>
    <div class="nps-estimate-note">预估NPS每日更新。当超过结束日期后，预估NPS将不再更新。</div>
  `;
  npsEstimateLightbox.classList.add("show");
  npsEstimateLightbox.setAttribute("aria-hidden", "false");
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
  document.getElementById("templateI18nPanel").classList.remove("active");
  document.getElementById("templateFormPanel").classList.remove("active");
  document.getElementById("taskPanel").classList.remove("active");
  document.getElementById("taskFormPanel").classList.remove("active");
  document.getElementById("audiencePanel").classList.remove("active");
}

function showTemplateList() {
  templateGroupCreationContext = null;
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
  templateGroupCreationContext = null;
  setActiveNav("task");
  setTemplateLayout(false);
  hideAllMainPanels();
  document.getElementById("taskPanel").classList.add("active");
  document.querySelector(".breadcrumb").textContent = "NPS管理 / NPS任务列表";
  if (window.location.hash !== "#nps-task") {
    window.location.hash = "nps-task";
  }
}

function getCurrentI18nTemplate() {
  return npsTemplates.find((template) => template.template_id === currentI18nTemplateId) || null;
}

function isGroupQuestionnaireTemplate(template) {
  return getTemplateRawType(template) === "分组问卷";
}

function getLinkedGroupTemplates(template) {
  if (!isPopupAppQuestionnaireType(getTemplateRawType(template))) return [];
  const linkedNames = template.linked_questionnaires || [];
  return linkedNames
    .map((name) => npsTemplates.find((item) => item.template_name === name && isGroupQuestionnaireTemplate(item)))
    .filter(Boolean);
}

function getTemplatePreviewQuestions(template) {
  const templateType = getTemplateDisplayType(getTemplateRawType(template));
  const sourceQuestions = isPopupAppQuestionnaireType(templateType) ? DEFAULT_GLOBAL_APP_QUESTIONS : template.questions || [];
  return sourceQuestions.map((question) => {
    const optionText = typeof question.options === "string" ? question.options : "";
    const scoreMatch = optionText.match(/1-(5|10)/);
    const choiceOptions = question.choiceOptions || question.choice_options || (
      question.type === "单选题" || question.type === "多选题"
        ? optionText.split(",").map((option) => ({ label: option.trim(), isOther: option.trim() === "其他" })).filter((option) => option.label)
        : []
    );
    return {
      type: question.type === "评分(功能/分组)" ? "评分(普通)" : question.type,
      title: question.title || "",
      subtitle: question.subtitle || "",
      scoreRange: question.scoreRange || question.score_range || (scoreMatch ? scoreMatch[1] : "10"),
      scoreMinDesc: question.scoreMinDesc || question.score_min_desc || "",
      scoreMaxDesc: question.scoreMaxDesc || question.score_max_desc || "",
      required: question.required || "必填",
      charLimit: question.charLimit || question.char_limit || "500",
      choiceOptions: normalizeQuestionOptions(choiceOptions),
    };
  });
}

function getTemplateI18nRows(template) {
  const rows = [
    { key: "page_title", name: "网页标题", value: template.questionnaire_title || template.template_name },
    { key: "questionnaire_title", name: "问卷标题", value: template.questionnaire_description || "" },
    { key: "questionnaire_subtitle", name: "问卷副标题", value: template.questionnaire_remark || "" },
  ];

  getTemplatePreviewQuestions(template).forEach((question, questionIndex) => {
    const prefix = `question_${questionIndex + 1}`;
    rows.push({ key: `${prefix}_title`, name: `问题${questionIndex + 1}标题`, value: question.title });
    rows.push({ key: `${prefix}_subtitle`, name: `问题${questionIndex + 1}副标题`, value: question.subtitle });
    if (question.type === "评分(全局)" || question.type === "评分(普通)") {
      rows.push({ key: `${prefix}_min_desc`, name: `问题${questionIndex + 1}最小值描述`, value: question.scoreMinDesc });
      rows.push({ key: `${prefix}_max_desc`, name: `问题${questionIndex + 1}最大值描述`, value: question.scoreMaxDesc });
    }
    if (question.type === "单选题" || question.type === "多选题") {
      question.choiceOptions.forEach((option, optionIndex) => {
        rows.push({ key: `${prefix}_option_${optionIndex + 1}`, name: `问题${questionIndex + 1}选项${optionIndex + 1}`, value: option.label });
        if (option.otherPrompt) {
          rows.push({ key: `${prefix}_option_${optionIndex + 1}_prompt`, name: `问题${questionIndex + 1}选项${optionIndex + 1}提示语`, value: option.otherPrompt });
        }
      });
    }
  });

  return rows.filter((row) => row.value !== "");
}

function translateI18nValue(value, languageKey) {
  if (!value) return "";
  if (languageKey === "zh_cn") return value;
  const exactTranslations = {
    en: {
      "网页标题": "Page title",
      "问卷标题": "Survey title",
      "问卷副标题": "Survey subtitle",
      "请根据实际体验完成以下问题": "Please answer based on your actual experience",
      "您有多大可能会向朋友或者同时推荐RingConn?": "How likely are you to recommend RingConn to a friend or colleague?",
      "不推荐": "Not likely",
      "非常推荐": "Very likely",
      "我们有哪些值得改进的地方?": "What should we improve?",
      "戒指外观设计与质感": "Ring appearance and material quality",
      "佩戴舒适度与尺寸": "Comfort and sizing",
      "续航与充电体验": "Battery life and charging",
      "戒指质量与耐用度": "Ring quality and durability",
      "App使用流畅度": "App smoothness",
      "App界面易读性": "App interface readability",
      "核心功能价值": "Core feature value",
      "数据监测准确性": "Data accuracy",
      "数据解读帮助性": "Data interpretation",
      "售后体验": "After-sales experience",
    },
    fr: {
      "请根据实际体验完成以下问题": "Veuillez répondre selon votre expérience réelle",
      "您有多大可能会向朋友或者同时推荐RingConn?": "Quelle est la probabilité que vous recommandiez RingConn ?",
      "不推荐": "Peu probable",
      "非常推荐": "Très probable",
      "我们有哪些值得改进的地方?": "Que devrions-nous améliorer ?",
    },
    de: {
      "请根据实际体验完成以下问题": "Bitte antworten Sie basierend auf Ihrer tatsächlichen Erfahrung",
      "您有多大可能会向朋友或者同时推荐RingConn?": "Wie wahrscheinlich ist es, dass Sie RingConn empfehlen?",
      "不推荐": "Nicht wahrscheinlich",
      "非常推荐": "Sehr wahrscheinlich",
      "我们有哪些值得改进的地方?": "Was sollten wir verbessern?",
    },
  };
  const sampleTranslations = {
    zh_tw: {
      "问卷": "問卷",
      "根据您的使用感受，是否认同以下描述？": "根據您的使用感受，是否認同以下描述？",
      "根据您对App的设计感受，是否认同以下描述？": "根據您對 App 的設計感受，是否認同以下描述？",
      "5=非常认同，1=非常不认同": "5=非常認同，1=非常不認同",
      "睡眠监测数据准确": "睡眠監測資料準確",
      "活动监测数据准确": "活動監測資料準確",
      "压力监测数据准确": "壓力監測資料準確",
      "生命体征监测数据准确": "生命體徵監測資料準確",
      "操作流程顺畅，符合逻辑": "操作流程順暢，符合邏輯",
      "想找的东西都很容易找到": "想找的內容都很容易找到",
      "文案话术描述清晰准确，易于理解": "文案話術描述清晰準確，易於理解",
      "图表信息清晰易懂": "圖表資訊清晰易懂",
      "字体字号大小合适，便于阅读": "字體字號大小合適，便於閱讀",
      "您是通过哪种方式了解到RingConn的？": "您是透過哪種方式了解到 RingConn 的？",
      "自发搜索": "自發搜尋",
      "亲友推荐": "親友推薦",
      "广告信息": "廣告資訊",
      "网络分享/推荐": "網路分享/推薦",
      "随机尝试/体验": "隨機嘗試/體驗",
      "您是通过哪个渠道购买了我们的产品？": "您是透過哪個通路購買了我們的產品？",
      "天猫": "天貓",
      "京东": "京東",
      "得物": "得物",
      "小红书": "小紅書",
      "微信小程序": "微信小程式",
      "线下门店": "線下門市",
      "其他渠道": "其他通路",
      "请填写其他渠道信息": "請填寫其他通路資訊",
      "您觉得我们在哪方面还需要改进？": "您覺得我們在哪方面還需要改進？",
      "如：预测更准、建议更个性化，界面更清晰等": "如：預測更準、建議更個人化、介面更清晰等",
      "选填": "選填",
      "返回上一步": "返回上一步",
      "下一步": "下一步",
      "提交": "提交",
    },
    en: {
      "问卷": "Survey",
      "根据您的使用感受，是否认同以下描述？": "Based on your experience, do you agree with the following statements?",
      "根据您对App的设计感受，是否认同以下描述？": "Based on your impression of the app design, do you agree with the following statements?",
      "5=非常认同，1=非常不认同": "5=Strongly agree, 1=Strongly disagree",
      "睡眠监测数据准确": "Sleep tracking data is accurate",
      "活动监测数据准确": "Activity tracking data is accurate",
      "压力监测数据准确": "Stress tracking data is accurate",
      "生命体征监测数据准确": "Vital signs tracking data is accurate",
      "操作流程顺畅，符合逻辑": "The workflow is smooth and logical",
      "想找的东西都很容易找到": "It is easy to find what I need",
      "文案话术描述清晰准确，易于理解": "The wording is clear, accurate, and easy to understand",
      "图表信息清晰易懂": "Chart information is clear and easy to understand",
      "字体字号大小合适，便于阅读": "The font size is appropriate and easy to read",
      "您是通过哪种方式了解到RingConn的？": "How did you learn about RingConn?",
      "自发搜索": "Self-initiated search",
      "亲友推荐": "Friends or family recommendation",
      "广告信息": "Advertisement",
      "网络分享/推荐": "Online sharing/recommendation",
      "随机尝试/体验": "Random trial/experience",
      "您是通过哪个渠道购买了我们的产品？": "Through which channel did you purchase our product?",
      "天猫": "Tmall",
      "京东": "JD.com",
      "得物": "Dewu",
      "小红书": "Xiaohongshu",
      "微信小程序": "WeChat Mini Program",
      "线下门店": "Offline store",
      "其他渠道": "Other channel",
      "请填写其他渠道信息": "Please enter the other channel",
      "您觉得我们在哪方面还需要改进？": "What areas do you think we still need to improve?",
      "如：预测更准、建议更个性化，界面更清晰等": "For example: more accurate predictions, more personalized suggestions, clearer interface, etc.",
      "选填": "Optional",
      "返回上一步": "Back",
      "下一步": "Next",
      "提交": "Submit",
    },
    ja: {
      "问卷": "アンケート",
      "根据您的使用感受，是否认同以下描述？": "ご利用体験に基づき、次の記述に同意しますか？",
      "根据您对App的设计感受，是否认同以下描述？": "アプリのデザイン体験に基づき、次の記述に同意しますか？",
      "5=非常认同，1=非常不认同": "5=非常に同意、1=まったく同意しない",
      "睡眠监测数据准确": "睡眠モニタリングデータは正確です",
      "活动监测数据准确": "アクティビティモニタリングデータは正確です",
      "压力监测数据准确": "ストレスモニタリングデータは正確です",
      "生命体征监测数据准确": "バイタルサインのモニタリングデータは正確です",
      "操作流程顺畅，符合逻辑": "操作フローはスムーズで論理的です",
      "想找的东西都很容易找到": "探したいものを簡単に見つけられます",
      "文案话术描述清晰准确，易于理解": "説明文は明確で正確、理解しやすいです",
      "图表信息清晰易懂": "グラフ情報は明確で理解しやすいです",
      "字体字号大小合适，便于阅读": "フォントサイズは適切で読みやすいです",
      "您是通过哪种方式了解到RingConn的？": "RingConnをどのように知りましたか？",
      "自发搜索": "自分で検索",
      "亲友推荐": "友人・家族の推薦",
      "广告信息": "広告情報",
      "网络分享/推荐": "オンライン共有/推薦",
      "随机尝试/体验": "偶然の試用/体験",
      "您是通过哪个渠道购买了我们的产品？": "どのチャネルで製品を購入しましたか？",
      "天猫": "Tmall",
      "京东": "JD.com",
      "得物": "Dewu",
      "小红书": "Xiaohongshu",
      "微信小程序": "WeChatミニプログラム",
      "线下门店": "実店舗",
      "其他渠道": "その他のチャネル",
      "请填写其他渠道信息": "その他のチャネル情報を入力してください",
      "您觉得我们在哪方面还需要改进？": "どの点をさらに改善すべきだと思いますか？",
      "如：预测更准、建议更个性化，界面更清晰等": "例：より正確な予測、より個別化された提案、より分かりやすい画面など",
      "选填": "任意",
      "返回上一步": "前へ戻る",
      "下一步": "次へ",
      "提交": "送信",
    },
    de: {
      "问卷": "Umfrage",
      "根据您的使用感受，是否认同以下描述？": "Stimmen Sie den folgenden Aussagen basierend auf Ihrer Nutzungserfahrung zu?",
      "根据您对App的设计感受，是否认同以下描述？": "Stimmen Sie den folgenden Aussagen basierend auf Ihrem Eindruck vom App-Design zu?",
      "5=非常认同，1=非常不认同": "5=Stimme voll zu, 1=Stimme überhaupt nicht zu",
      "睡眠监测数据准确": "Die Schlafdaten sind genau",
      "活动监测数据准确": "Die Aktivitätsdaten sind genau",
      "压力监测数据准确": "Die Stressdaten sind genau",
      "生命体征监测数据准确": "Die Vitaldaten sind genau",
      "操作流程顺畅，符合逻辑": "Der Bedienablauf ist reibungslos und logisch",
      "想找的东西都很容易找到": "Gesuchte Inhalte sind leicht zu finden",
      "文案话术描述清晰准确，易于理解": "Die Texte sind klar, präzise und leicht verständlich",
      "图表信息清晰易懂": "Diagramminformationen sind klar und leicht verständlich",
      "字体字号大小合适，便于阅读": "Die Schriftgröße ist passend und gut lesbar",
      "您是通过哪种方式了解到RingConn的？": "Wie haben Sie von RingConn erfahren?",
      "自发搜索": "Eigene Suche",
      "亲友推荐": "Empfehlung von Freunden/Familie",
      "广告信息": "Werbung",
      "网络分享/推荐": "Online-Teilen/Empfehlung",
      "随机尝试/体验": "Zufälliger Test/Erfahrung",
      "您是通过哪个渠道购买了我们的产品？": "Über welchen Kanal haben Sie unser Produkt gekauft?",
      "天猫": "Tmall",
      "京东": "JD.com",
      "得物": "Dewu",
      "小红书": "Xiaohongshu",
      "微信小程序": "WeChat Mini Program",
      "线下门店": "Offline-Shop",
      "其他渠道": "Anderer Kanal",
      "请填写其他渠道信息": "Bitte geben Sie den anderen Kanal an",
      "您觉得我们在哪方面还需要改进？": "In welchen Bereichen sollten wir uns noch verbessern?",
      "如：预测更准、建议更个性化，界面更清晰等": "Z. B. genauere Vorhersagen, persönlichere Empfehlungen, klarere Oberfläche usw.",
      "选填": "Optional",
      "返回上一步": "Zurück",
      "下一步": "Weiter",
      "提交": "Senden",
    },
    es: {
      "问卷": "Encuesta",
      "根据您的使用感受，是否认同以下描述？": "Según su experiencia de uso, ¿está de acuerdo con las siguientes afirmaciones?",
      "根据您对App的设计感受，是否认同以下描述？": "Según su impresión del diseño de la app, ¿está de acuerdo con las siguientes afirmaciones?",
      "5=非常认同，1=非常不认同": "5=Totalmente de acuerdo, 1=Totalmente en desacuerdo",
      "睡眠监测数据准确": "Los datos de sueño son precisos",
      "活动监测数据准确": "Los datos de actividad son precisos",
      "压力监测数据准确": "Los datos de estrés son precisos",
      "生命体征监测数据准确": "Los datos de signos vitales son precisos",
      "操作流程顺畅，符合逻辑": "El flujo de uso es fluido y lógico",
      "想找的东西都很容易找到": "Es fácil encontrar lo que necesito",
      "文案话术描述清晰准确，易于理解": "Los textos son claros, precisos y fáciles de entender",
      "图表信息清晰易懂": "La información de los gráficos es clara y fácil de entender",
      "字体字号大小合适，便于阅读": "El tamaño de fuente es adecuado y fácil de leer",
      "您是通过哪种方式了解到RingConn的？": "¿Cómo conoció RingConn?",
      "自发搜索": "Búsqueda propia",
      "亲友推荐": "Recomendación de amigos o familiares",
      "广告信息": "Publicidad",
      "网络分享/推荐": "Compartido/recomendado en línea",
      "随机尝试/体验": "Prueba/experiencia casual",
      "您是通过哪个渠道购买了我们的产品？": "¿Por qué canal compró nuestro producto?",
      "线下门店": "Tienda física",
      "其他渠道": "Otro canal",
      "请填写其他渠道信息": "Indique el otro canal",
      "您觉得我们在哪方面还需要改进？": "¿En qué aspectos cree que debemos mejorar?",
      "如：预测更准、建议更个性化，界面更清晰等": "Por ejemplo: predicciones más precisas, sugerencias más personalizadas, interfaz más clara, etc.",
      "选填": "Opcional",
      "返回上一步": "Atrás",
      "下一步": "Siguiente",
      "提交": "Enviar",
    },
    fr: {
      "问卷": "Questionnaire",
      "根据您的使用感受，是否认同以下描述？": "D'après votre expérience d'utilisation, êtes-vous d'accord avec les affirmations suivantes ?",
      "根据您对App的设计感受，是否认同以下描述？": "D'après votre impression du design de l'application, êtes-vous d'accord avec les affirmations suivantes ?",
      "5=非常认同，1=非常不认同": "5=Tout à fait d'accord, 1=Pas du tout d'accord",
      "睡眠监测数据准确": "Les données de suivi du sommeil sont précises",
      "活动监测数据准确": "Les données de suivi d'activité sont précises",
      "压力监测数据准确": "Les données de suivi du stress sont précises",
      "生命体征监测数据准确": "Les données des signes vitaux sont précises",
      "操作流程顺畅，符合逻辑": "Le parcours d'utilisation est fluide et logique",
      "想找的东西都很容易找到": "Il est facile de trouver ce que je cherche",
      "文案话术描述清晰准确，易于理解": "Les textes sont clairs, précis et faciles à comprendre",
      "图表信息清晰易懂": "Les informations des graphiques sont claires et faciles à comprendre",
      "字体字号大小合适，便于阅读": "La taille de police est adaptée et facile à lire",
      "您是通过哪种方式了解到RingConn的？": "Comment avez-vous découvert RingConn ?",
      "自发搜索": "Recherche personnelle",
      "亲友推荐": "Recommandation d'amis ou de famille",
      "广告信息": "Publicité",
      "网络分享/推荐": "Partage/recommandation en ligne",
      "随机尝试/体验": "Essai/expérience par hasard",
      "您是通过哪个渠道购买了我们的产品？": "Par quel canal avez-vous acheté notre produit ?",
      "线下门店": "Magasin physique",
      "其他渠道": "Autre canal",
      "请填写其他渠道信息": "Veuillez renseigner l'autre canal",
      "您觉得我们在哪方面还需要改进？": "Selon vous, quels aspects devons-nous encore améliorer ?",
      "如：预测更准、建议更个性化，界面更清晰等": "Par exemple : prévisions plus précises, conseils plus personnalisés, interface plus claire, etc.",
      "选填": "Facultatif",
      "返回上一步": "Retour",
      "下一步": "Suivant",
      "提交": "Envoyer",
    },
    ko: {
      "问卷": "설문",
      "根据您的使用感受，是否认同以下描述？": "사용 경험을 기준으로 다음 설명에 동의하시나요?",
      "根据您对App的设计感受，是否认同以下描述？": "앱 디자인 경험을 기준으로 다음 설명에 동의하시나요?",
      "5=非常认同，1=非常不认同": "5=매우 동의, 1=전혀 동의하지 않음",
      "睡眠监测数据准确": "수면 모니터링 데이터가 정확합니다",
      "活动监测数据准确": "활동 모니터링 데이터가 정확합니다",
      "压力监测数据准确": "스트레스 모니터링 데이터가 정확합니다",
      "生命体征监测数据准确": "생체 신호 모니터링 데이터가 정확합니다",
      "操作流程顺畅，符合逻辑": "사용 흐름이 매끄럽고 논리적입니다",
      "想找的东西都很容易找到": "찾고 싶은 내용을 쉽게 찾을 수 있습니다",
      "文案话术描述清晰准确，易于理解": "문구가 명확하고 정확하며 이해하기 쉽습니다",
      "图表信息清晰易懂": "차트 정보가 명확하고 이해하기 쉽습니다",
      "字体字号大小合适，便于阅读": "글꼴 크기가 적절하고 읽기 쉽습니다",
      "您是通过哪种方式了解到RingConn的？": "RingConn을 어떻게 알게 되셨나요?",
      "自发搜索": "직접 검색",
      "亲友推荐": "지인/가족 추천",
      "广告信息": "광고",
      "网络分享/推荐": "온라인 공유/추천",
      "随机尝试/体验": "우연한 체험",
      "您是通过哪个渠道购买了我们的产品？": "어떤 채널을 통해 제품을 구매하셨나요?",
      "天猫": "Tmall",
      "京东": "JD.com",
      "得物": "Dewu",
      "小红书": "Xiaohongshu",
      "微信小程序": "WeChat 미니 프로그램",
      "线下门店": "오프라인 매장",
      "其他渠道": "기타 채널",
      "请填写其他渠道信息": "기타 채널 정보를 입력해 주세요",
      "您觉得我们在哪方面还需要改进？": "어떤 부분을 더 개선해야 한다고 생각하시나요?",
      "如：预测更准、建议更个性化，界面更清晰等": "예: 더 정확한 예측, 더 개인화된 제안, 더 명확한 화면 등",
      "选填": "선택",
      "返回上一步": "이전",
      "下一步": "다음",
      "提交": "제출",
    },
  };
  Object.entries(sampleTranslations).forEach(([key, translations]) => {
    exactTranslations[key] = { ...(exactTranslations[key] || {}), ...translations };
  });
  const language = I18N_LANGUAGES.find((item) => item.key === languageKey);
  if (exactTranslations[languageKey] && exactTranslations[languageKey][value]) {
    return exactTranslations[languageKey][value];
  }
  if (languageKey !== "en" && exactTranslations.en && exactTranslations.en[value]) {
    return exactTranslations.en[value];
  }
  return `${language ? language.previewLabel : languageKey} ${value}`;
}

function getI18nValue(rows, key, languageKey) {
  const row = rows.find((item) => item.key === key);
  return row ? translateI18nValue(row.value, languageKey) : "";
}

function renderI18nRows(template) {
  if (!i18nRows) return;
  const rows = getTemplateI18nRows(template);
  i18nRows.innerHTML = rows.map((row) => `
    <tr>
      <td>${escapeText(row.key)}</td>
      <td>${escapeText(row.name)}</td>
      <td>${escapeText(translateI18nValue(row.value, "zh_cn"))}</td>
      <td>${escapeText(translateI18nValue(row.value, "en"))}</td>
      <td>${escapeText(translateI18nValue(row.value, "fr"))}</td>
    </tr>
  `).join("");
}

function renderI18nLanguageTabs() {
  i18nLanguageTabs.innerHTML = I18N_LANGUAGES.map((language) => `
    <button class="language-tab${language.key === currentI18nLanguage ? " active" : ""}" type="button" data-language="${escapeText(language.key)}">${escapeText(language.previewLabel)}</button>
  `).join("");
}

function renderPreviewQuestion(question, index, rows) {
  const title = getI18nValue(rows, `question_${index + 1}_title`, currentI18nLanguage);
  const subtitle = getI18nValue(rows, `question_${index + 1}_subtitle`, currentI18nLanguage);
  const optionalMark = question.type === "开放题" && question.required === "选填"
    ? `（${translateI18nValue("选填", currentI18nLanguage)}）`
    : "";

  if (question.type === "评分(全局)" || question.type === "评分(普通)") {
    const minDesc = getI18nValue(rows, `question_${index + 1}_min_desc`, currentI18nLanguage);
    const maxDesc = getI18nValue(rows, `question_${index + 1}_max_desc`, currentI18nLanguage);
    const scoreRange = Number(question.scoreRange) || 10;
    return `
      <div class="preview-question">
        <div class="preview-question-title">${index + 1}. ${escapeText(title)}</div>
        ${subtitle ? `<div class="preview-question-subtitle">${escapeText(subtitle)}</div>` : ""}
        <div class="preview-score-row" style="grid-template-columns: repeat(${scoreRange}, 1fr);">
          ${Array.from({ length: scoreRange }, (_, scoreIndex) => `<span>${scoreIndex + 1}</span>`).join("")}
        </div>
        <div class="preview-score-desc">
          <span>${escapeText(minDesc)}</span>
          <span>${escapeText(maxDesc)}</span>
        </div>
      </div>
    `;
  }

  if (question.type === "单选题" || question.type === "多选题") {
    return `
      <div class="preview-question">
        <div class="preview-question-title">${index + 1}. ${escapeText(title)}</div>
        ${subtitle ? `<div class="preview-question-subtitle">${escapeText(subtitle)}</div>` : ""}
        <div class="preview-choice-list">
          ${question.choiceOptions.map((option, optionIndex) => `
            <div class="preview-choice-item">
              <span class="${question.type === "单选题" ? "radio-icon" : "checkbox-icon"}"></span>
              <span>${escapeText(getI18nValue(rows, `question_${index + 1}_option_${optionIndex + 1}`, currentI18nLanguage) || option.label)}</span>
            </div>
            ${option.otherPrompt ? `
              <div class="preview-other-fill">
                <div class="preview-other-prompt">${escapeText(getI18nValue(rows, `question_${index + 1}_option_${optionIndex + 1}_prompt`, currentI18nLanguage) || option.otherPrompt)}</div>
                <div class="preview-other-input"></div>
                <div class="preview-char-limit">0 / ${escapeText(option.charLimit)}</div>
              </div>
            ` : ""}
          `).join("")}
        </div>
      </div>
    `;
  }

  return `
    <div class="preview-question">
      <div class="preview-question-title">${index + 1}. ${escapeText(title)}${optionalMark}</div>
      ${subtitle ? `<div class="preview-question-subtitle">${escapeText(subtitle)}</div>` : ""}
      <div class="preview-textarea"></div>
      <div class="preview-char-limit">0 / ${escapeText(question.charLimit)}</div>
    </div>
  `;
}

function renderI18nPreviewBody(sourceTemplate, pageTitle, pageActions = "") {
  const rows = getTemplateI18nRows(sourceTemplate);
  const questions = getTemplatePreviewQuestions(sourceTemplate);
  const surveyTitle = getI18nValue(rows, "questionnaire_title", currentI18nLanguage);
  const surveySubtitle = getI18nValue(rows, "questionnaire_subtitle", currentI18nLanguage);
  return `
    <div class="preview-h5-header">
      <span class="preview-back-icon">&lt;</span>
      <span class="preview-web-title">${escapeText(pageTitle)}</span>
    </div>
    <div class="preview-h5-body">
      ${surveyTitle ? `<div class="preview-survey-title">${escapeText(surveyTitle)}</div>` : ""}
      ${surveySubtitle ? `<div class="preview-survey-subtitle">${escapeText(surveySubtitle)}</div>` : ""}
      ${questions.map((question, index) => renderPreviewQuestion(question, index, rows)).join("")}
      ${pageActions}
    </div>
  `;
}

function renderLinkedGroupPreview(template, linkedGroups) {
  currentI18nGroupIndex = Math.min(currentI18nGroupIndex, linkedGroups.length - 1);
  const currentGroup = linkedGroups[currentI18nGroupIndex];
  const rows = getTemplateI18nRows(currentGroup);
  const baseTitle = getI18nValue(rows, "page_title", currentI18nLanguage);
  const pageTitle = linkedGroups.length > 1 ? `${baseTitle}(${currentI18nGroupIndex + 1}/${linkedGroups.length})` : baseTitle;
  const showPrev = currentI18nGroupIndex > 0;
  const showNext = currentI18nGroupIndex < linkedGroups.length - 1;
  const pageActions = linkedGroups.length > 1
    ? `
      <div class="preview-page-actions">
        ${showPrev ? `<button class="preview-page-button preview-page-prev" type="button">${escapeText(translateI18nValue("返回上一步", currentI18nLanguage))}</button>` : ""}
        <button class="preview-page-button ${showNext ? "preview-page-next" : "preview-page-submit"}" type="button">${escapeText(translateI18nValue(showNext ? "下一步" : "提交", currentI18nLanguage))}</button>
      </div>
    `
    : "";

  i18nPreviewCard.innerHTML = renderI18nPreviewBody(currentGroup, pageTitle, pageActions);
}

function renderI18nPreview() {
  const template = getCurrentI18nTemplate();
  if (!template) return;
  const linkedGroups = getLinkedGroupTemplates(template);
  const rows = getTemplateI18nRows(template);
  renderI18nLanguageTabs();
  if (linkedGroups.length) {
    renderLinkedGroupPreview(template, linkedGroups);
    return;
  }
  i18nPreviewCard.innerHTML = renderI18nPreviewBody(template, getI18nValue(rows, "page_title", currentI18nLanguage));
}

function openTemplateI18nPage(templateId) {
  const template = npsTemplates.find((item) => item.template_id === templateId);
  if (!template) return;
  currentI18nTemplateId = templateId;
  currentI18nLanguage = "zh_cn";
  currentI18nGroupIndex = 0;
  i18nFileInput.value = "";
  i18nLoading.classList.add("hidden");
  setActiveNav("template");
  setTemplateLayout(true);
  hideAllMainPanels();
  document.getElementById("templateI18nPanel").classList.add("active");
  document.querySelector(".breadcrumb").textContent = "NPS管理 / NPS问卷模板 / 多语言配置";
  window.location.hash = "nps-template-i18n";
  renderI18nRows(template);
  renderI18nPreview();
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

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildCopyTaskName(taskName) {
  const baseName = taskName.replace(/\(\d+\)$/, "");
  const matcher = new RegExp(`^${escapeRegExp(baseName)}(?:\\((\\d+)\\))?$`);
  const maxIndex = tasks.reduce((max, task) => {
    const match = task.task_name.match(matcher);
    if (!match) return max;
    return Math.max(max, match[1] ? Number(match[1]) : 0);
  }, 0);
  return `${baseName}(${maxIndex + 1})`;
}

function setTaskFormReadonly(readonly) {
  document.getElementById("taskForm").classList.toggle("readonly", readonly);
  [
    formFields.taskName,
    formFields.planName,
    formFields.taskScene,
    formFields.taskRegion,
    formFields.startDate,
    formFields.startHour,
    formFields.endDate,
    formFields.endHour,
    formFields.appTrigger,
    formFields.appClientApp,
    formFields.appClientWeb,
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

function setTaskFormCopyMode(enabled) {
  document.getElementById("taskForm").classList.toggle("copy-mode", enabled);
  if (!enabled) return;
  [
    formFields.planName,
    formFields.taskScene,
    formFields.taskRegion,
    formFields.appTrigger,
    formFields.appClientApp,
    formFields.appClientWeb,
    formFields.templateName,
  ].forEach((field) => {
    field.disabled = true;
  });
  document.getElementById("addPlanBtn").disabled = true;
  formFields.appPanel.classList.remove("open");
}

function resetTaskForm() {
  setTaskFormReadonly(false);
  setTaskFormCopyMode(false);
  clearFormErrors();
  document.getElementById("taskForm").reset();
  formFields.editingTaskId.value = "";
  formFields.planName.value = "";
  formFields.taskScene.value = "";
  formFields.taskRegion.value = "";
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
  formFields.taskRegion.value = task.delivery_region || "所有区域";
  setDateHourValue(formFields.startDate, formFields.startHour, task.start_time);
  setDateHourValue(formFields.endDate, formFields.endHour, task.end_time);
  formFields.templateName.value = task.template_name;
  formFields.appClientApp.checked = task.app_client.includes("APP");
  formFields.appClientWeb.checked = task.app_client.includes("WEB") || task.app_client.includes("Web");
  updateAppTrigger();
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
  const pageName = mode === "view" ? "查看任务" : mode === "edit" ? "编辑任务" : mode === "copy" ? "复制任务" : "新增任务";
  document.querySelector(".breadcrumb").textContent = `NPS管理 / NPS任务列表 / ${pageName}`;

  if (mode === "edit" || mode === "view" || mode === "copy") {
    const task = tasks.find((item) => item.task_id === taskId);
    if (!task) return;
    if (mode === "edit" && !canEditTask(task)) {
      showToast("仅初始状态任务允许编辑。");
      showTaskList();
      return;
    }
    fillTaskForm(task);
    if (mode === "copy") {
      formFields.editingTaskId.value = "";
      formFields.taskName.value = buildCopyTaskName(task.task_name);
      formFields.startDate.value = "";
      formFields.startHour.value = "";
      formFields.endDate.value = "";
      formFields.endHour.value = "";
      clearAudienceFile();
      setTaskFormCopyMode(true);
    } else {
      setTaskFormReadonly(mode === "view");
    }
  }
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
  if (!formFields.taskRegion.value) {
    setError("taskRegion", "投放范围不能为空。");
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
    delivery_region: formFields.taskRegion.value,
    audience_link_text: "查看",
    audience_file_names: audienceFileNames,
    audience_file_name: audienceFileNames.join(","),
    app_client: getSelectedApps().join(","),
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
    if (!canEditTask(task)) {
      showToast("仅初始状态任务允许编辑。");
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
      nps_estimate: "",
      nps_promoters: "0",
      nps_passives: "0",
      nps_detractors: "0",
      nps_updated_at: "",
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
  updateTemplateVersionVisibility();
}

function updateTemplateVersionVisibility() {
  const requiresVersion = templateFormFields.channelApp.checked;
  templateFormFields.versionRow.classList.toggle("hidden", !requiresVersion);
  [
    templateFormFields.androidVersion,
    templateFormFields.androidVersionEnd,
    templateFormFields.iosVersion,
    templateFormFields.iosVersionEnd,
  ].forEach((field) => {
    field.disabled = !requiresVersion || templateFormFields.channelTrigger.disabled;
    if (!requiresVersion) field.value = "";
  });
  if (!requiresVersion) {
    templateFormErrors.version.textContent = "";
    templateFormErrors.version.classList.remove("show");
  }
}

function getLinkedQuestionnaireInputs() {
  return Array.from(templateFormFields.linkedPanel.querySelectorAll('input[data-linked-questionnaire="true"]'));
}

function getGroupQuestionnaireTemplates() {
  return npsTemplates.filter((template) => getTemplateDisplayType(getTemplateRawType(template)) === "分组问卷");
}

function renderLinkedQuestionnaireOptions(selectedValues = []) {
  const selected = new Set(selectedValues || []);
  const groupTemplates = getGroupQuestionnaireTemplates();
  if (!groupTemplates.length) {
    templateFormFields.linkedPanel.innerHTML = '<div class="multi-empty">暂无分组问卷</div>';
    updateLinkedQuestionnaireTrigger();
    return;
  }

  templateFormFields.linkedPanel.innerHTML = sortTemplatesByIdDesc(groupTemplates).map((template) => {
    const templateName = template.template_name;
    return `
      <label>
        <input type="checkbox" value="${escapeText(templateName)}" data-linked-questionnaire="true" ${selected.has(templateName) ? "checked" : ""} />
        ${escapeText(templateName)}
      </label>
    `;
  }).join("");
  updateLinkedQuestionnaireTrigger();
}

function getSelectedLinkedQuestionnaires() {
  return getLinkedQuestionnaireInputs().filter((field) => field.checked).map((field) => field.value);
}

function getSelectedLinkedQuestionnaireTemplates() {
  const selectedNames = new Set(getSelectedLinkedQuestionnaires());
  return npsTemplates.filter((template) => selectedNames.has(template.template_name));
}

function validateLinkedQuestionnaireTitles() {
  const linkedTemplates = getSelectedLinkedQuestionnaireTemplates();
  if (linkedTemplates.length <= 1) return true;
  const titles = new Set(linkedTemplates.map((template) => (template.questionnaire_title || "").trim()));
  if (titles.size <= 1) return true;
  setTemplateError("linked", "所选分组问卷的网页标题必须保持一致。");
  return false;
}

function updateLinkedQuestionnaireTrigger() {
  const selected = getSelectedLinkedQuestionnaires();
  templateFormFields.linkedTrigger.textContent = selected.length > 3 ? `已选择 ${selected.length} 项` : selected.length ? selected.join("，") : "请选择完整问卷";
  if (selected.length && validateLinkedQuestionnaireTitles()) clearTemplateError("linked");
}

function setLinkedQuestionnaires(values) {
  renderLinkedQuestionnaireOptions(values || []);
}

function updateRichTextCount() {
  document.querySelector(".char-count").textContent = `${templateFormFields.popupCopy.textContent.length} / 1000`;
}

function updateQuestionnaireDescriptionCount() {
  if (templateFormFields.questionnaireDescriptionCount) {
    templateFormFields.questionnaireDescriptionCount.textContent = `${templateFormFields.questionnaireDescription.value.length} / 200`;
  }
}

function getDefaultPopupCopyHtml() {
  return escapeText(DEFAULT_DESIGN_POPUP_COPY).replace(/\n/g, "<br>");
}

function updateTemplateLockedDefaults() {
  const type = templateFormFields.questionnaireType.value;
  const isGroupType = type === "分组问卷";
  const isDesignType = isDesignQuestionnaireType(type);
  const shouldLockBanner = Boolean(type) && !isGroupType;

  [
    [templateFormFields.bannerTitle, DEFAULT_TEMPLATE_BANNER.title],
    [templateFormFields.bannerSubtitle, DEFAULT_TEMPLATE_BANNER.subtitle],
    [templateFormFields.bannerButton, DEFAULT_TEMPLATE_BANNER.button],
  ].forEach(([field, value]) => {
    field.disabled = true;
    field.readOnly = false;
    if (shouldLockBanner) field.value = value;
  });

  templateFormFields.questionnaireTitle.readOnly = false;

  templateFormFields.popupCopy.contentEditable = isDesignType ? "false" : "true";
  templateFormFields.popupCopy.classList.toggle("is-readonly", isDesignType);
  document.querySelectorAll(".rich-button, .color-swatch").forEach((button) => {
    button.disabled = isDesignType;
  });
  if (isDesignType) {
    templateFormFields.popupCopy.innerHTML = getDefaultPopupCopyHtml();
    savedRichTextRange = null;
    updateRichTextCount();
  }
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
  return [
    "弹窗问卷(用研)",
    "弹窗问卷(设计)",
    "全局问卷(设计反馈)",
    "全局问卷(设计问卷)",
  ].includes(type);
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
  document.getElementById("submitTemplateFromStepOneBtn").classList.add("hidden");
  document.getElementById("nextTemplateStepBtn").classList.remove("hidden");
  document.getElementById("templateStepTwo").classList.remove("hidden");
  document.getElementById("addQuestionBtn").classList.toggle("hidden", isGlobalAppQuestionnaire());
}

function setTemplateStep(step) {
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
  if (questionnaireType === "弹窗问卷(用研)" || questionnaireType === "弹窗问卷(设计)") return questionnaireType;
  if (isDesignQuestionnaireType(questionnaireType)) return "弹窗问卷(用研)";
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
  const isGroupType = type === "分组问卷";
  document.querySelectorAll(".type-panel").forEach((panel) => panel.classList.remove("active"));
  ["templateBannerTitleRow", "templateBannerSubtitleRow", "templateBannerButtonRow"].forEach((rowId) => {
    document.getElementById(rowId).classList.toggle("hidden", isGroupType);
  });
  if (isGroupType) {
    clearTemplateError("bannerTitle");
    clearTemplateError("bannerSubtitle");
    clearTemplateError("bannerButton");
  }
  const isDesignType = isDesignQuestionnaireType(type);
  const usesLinkedQuestionnaire = isPopupAppQuestionnaireType(type);
  if (!usesLinkedQuestionnaire) templateFormFields.linkedPanel.classList.remove("open");
  updateTemplateStepControls();
  updateTemplateLockedDefaults();

  if (!type) {
    renderTemplateQuestionList();
    return;
  }

  if (usesLinkedQuestionnaire) {
    renderLinkedQuestionnaireOptions(getSelectedLinkedQuestionnaires());
    document.getElementById("typePanelLinked").classList.add("active");
  }
  if (isDesignType) {
    document.getElementById("typePanelDesign").classList.add("active");
  }
  if (isDesignType || type === "功能问卷" || type === "分组问卷") {
    document.getElementById("typePanelCommon").classList.add("active");
  }
  document.getElementById("questionnaireDescriptionLabel").classList.remove("required");
  clearTemplateError("questionnaireDescription");

  if (isGlobalAppQuestionnaire()) ensureGlobalAppFixedQuestions();
  ensureAddConfigurableSingleQuestion();
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

function isConfigurableQuestionnaire() {
  return isCommonQuestionnaire() || isDesignQuestionnaireType(templateFormFields.questionnaireType.value);
}

function normalizeQuestionOptions(options) {
  const source = Array.isArray(options) ? options : [];
  const normalized = source.map((option) => {
    if (typeof option === "string") {
      return { label: option, isOther: option === "其他", otherPrompt: "", charLimit: "500" };
    }
    return {
      label: option.label || "选项",
      isOther: Boolean(option.isOther),
      otherPrompt: option.otherPrompt || option.other_prompt || "",
      charLimit: option.charLimit || option.char_limit || "500",
    };
  });
  if (!normalized.length) normalized.push({ label: "选项", isOther: false, otherPrompt: "", charLimit: "500" });
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
  templateQuestions = cloneTemplateQuestions(DEFAULT_GLOBAL_APP_QUESTIONS);
}

function ensureAddConfigurableSingleQuestion() {
  if (templateFormMode !== "add" || !isConfigurableQuestionnaire()) return;
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
  const isFixedGlobalApp = isGlobalAppQuestionnaire();
  const fixedAttribute = isFixedGlobalApp ? "disabled" : "";
  return `
    <div class="question-option-list">
      ${question.choiceOptions.map((option, optionIndex) => `
        <div class="question-option-row">
          <input type="${inputType}" disabled />
          <input class="question-option-input" type="text" value="${escapeText(option.label)}" data-question-index="${questionIndex}" data-option-index="${optionIndex}" data-question-field="optionLabel" ${option.isOther ? "readonly" : ""} ${fixedAttribute} />
          ${isFixedGlobalApp ? "" : `<button class="link-button question-remove-option" type="button" data-question-index="${questionIndex}" data-option-index="${optionIndex}">删除</button>`}
        </div>
      `).join("")}
    </div>
    ${renderQuestionError(question.errors && question.errors.options)}
    ${isFixedGlobalApp ? "" : `<div class="question-option-actions">
      <button class="link-button question-add-option" type="button" data-question-index="${questionIndex}">添加选项</button>
      <button class="link-button question-add-other" type="button" data-question-index="${questionIndex}">添加其他</button>
    </div>`}
  `;
}

function renderChoiceOtherConfig(question, questionIndex) {
  if (question.type !== "单选题" && question.type !== "多选题") return "";
  const isFixedGlobalApp = isGlobalAppQuestionnaire();
  const fixedAttribute = isFixedGlobalApp ? "disabled" : "";
  const otherOptionIndex = question.choiceOptions.findIndex((option) => option.isOther);
  if (otherOptionIndex < 0) return "";
  const otherOption = question.choiceOptions[otherOptionIndex];
  return `
    <div class="question-row">
      <label class="question-label">其他选项描述</label>
      <input class="ax-input question-control question-field" type="text" value="${escapeText(otherOption.otherPrompt)}" data-question-index="${questionIndex}" data-option-index="${otherOptionIndex}" data-question-field="otherPrompt" ${fixedAttribute} />
    </div>
    <div class="question-row">
      <label class="question-label">字符限制</label>
      <select class="ax-select question-control question-field" data-question-index="${questionIndex}" data-option-index="${otherOptionIndex}" data-question-field="otherCharLimit" ${fixedAttribute}>
        <option value="500"${otherOption.charLimit === "500" ? " selected" : ""}>500</option>
        <option value="1000"${otherOption.charLimit === "1000" ? " selected" : ""}>1000</option>
        <option value="2000"${otherOption.charLimit === "2000" ? " selected" : ""}>2000</option>
      </select>
    </div>
  `;
}

function renderQuestionBody(question, index) {
  const fixedAttribute = isGlobalAppQuestionnaire() ? "disabled" : "";
  if (question.type === "评分(全局)" || question.type === "评分(普通)" || question.type === "评分(功能/分组)") {
    return `
      <div class="question-row">
        <label class="question-label required">选项</label>
        <select class="ax-select question-control question-field" data-question-index="${index}" data-question-field="scoreRange" ${fixedAttribute}>
          <option value="10"${question.scoreRange === "10" ? " selected" : ""}>10</option>
          <option value="5"${question.scoreRange === "5" ? " selected" : ""}>5</option>
        </select>
      </div>
      <div class="score-preview">${renderScorePreview(question.scoreRange)}</div>
      <div class="question-row">
        <label class="question-label">最小值描述</label>
        <input class="ax-input question-control question-field" type="text" value="${escapeText(question.scoreMinDesc)}" data-question-index="${index}" data-question-field="scoreMinDesc" ${fixedAttribute} />
      </div>
      <div class="question-row">
        <label class="question-label">最大值描述</label>
        <input class="ax-input question-control question-field" type="text" value="${escapeText(question.scoreMaxDesc)}" data-question-index="${index}" data-question-field="scoreMaxDesc" ${fixedAttribute} />
      </div>
      ${question.type === "评分(全局)" ? `
        <div class="question-row">
          <label class="question-label">低评分引导文案</label>
          <input class="ax-input question-control question-field" type="text" value="${escapeText(question.lowScoreGuide)}" data-question-index="${index}" data-question-field="lowScoreGuide" ${fixedAttribute} />
        </div>
        <div class="question-row">
          <label class="question-label">高评分引导文案</label>
          <input class="ax-input question-control question-field" type="text" value="${escapeText(question.highScoreGuide)}" data-question-index="${index}" data-question-field="highScoreGuide" ${fixedAttribute} />
        </div>
        <div class="question-row">
          <label class="question-label">其他评分引导文案</label>
          <input class="ax-input question-control question-field" type="text" value="${escapeText(question.otherScoreGuide)}" data-question-index="${index}" data-question-field="otherScoreGuide" ${fixedAttribute} />
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
      ${renderChoiceOtherConfig(question, index)}
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
  const fixedQuestionAttribute = isFixedGlobalApp ? "disabled" : "";
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
        <input class="ax-input question-control question-field" type="text" value="${escapeText(question.title)}" data-question-index="${index}" data-question-field="title" ${fixedQuestionAttribute} />
        ${renderQuestionError(question.errors && question.errors.title)}
      </div>
      <div class="question-row">
        <label class="question-label">问题副标题</label>
        <input class="ax-input question-control question-field" type="text" value="${escapeText(question.subtitle)}" data-question-index="${index}" data-question-field="subtitle" ${fixedQuestionAttribute} />
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
  const requiresBannerFields = questionnaireType !== "分组问卷";
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
  if (requiresBannerFields && !templateFormFields.bannerTitle.value.trim()) {
    setTemplateError("bannerTitle", "Banner标题不能为空。");
    valid = false;
  }
  if (requiresBannerFields && !templateFormFields.bannerSubtitle.value.trim()) {
    setTemplateError("bannerSubtitle", "Banner副标题不能为空。");
    valid = false;
  }
  if (requiresBannerFields && !templateFormFields.bannerButton.value.trim()) {
    setTemplateError("bannerButton", "Banner按钮文案不能为空。");
    valid = false;
  }
  if ((isCommonQuestionnaireType || isDesignQuestionnaireType(questionnaireType)) && !templateFormFields.questionnaireTitle.value.trim()) {
    setTemplateError("questionnaireTitle", "网页标题不能为空。");
    valid = false;
  }
  if (isDesignQuestionnaireType(questionnaireType) && !templateFormFields.pageSize.value) {
    setTemplateError("pageSize", "分页数量不能为空。");
    valid = false;
  }
  if (isPopupAppQuestionnaireType(questionnaireType) && !getSelectedLinkedQuestionnaires().length) {
    setTemplateError("linked", "关联完整问卷不能为空。");
    valid = false;
  } else if (isPopupAppQuestionnaireType(questionnaireType) && !validateLinkedQuestionnaireTitles()) {
    valid = false;
  }
  if (templateFormFields.channelApp.checked) {
    if (!hasVersion) {
      templateFormErrors.version.textContent = "选择 APP 时投放版本不能为空。";
      templateFormErrors.version.classList.add("show");
      valid = false;
    } else if (versionInvalid) {
      templateFormErrors.version.textContent = "投放版本需先填写开始值，且结束值必须大于开始值。";
      templateFormErrors.version.classList.add("show");
      valid = false;
    }
  }

  return valid;
}

function buildTemplateVersionText() {
  if (!templateFormFields.channelApp.checked) return "-";
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
  if (isGlobalAppQuestionnaire()) return;
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
  if (field === "otherPrompt" || field === "otherCharLimit") {
    const optionIndex = Number(target.dataset.optionIndex);
    const option = question.choiceOptions[optionIndex];
    if (!option || !option.isOther) return;
    if (field === "otherPrompt") option.otherPrompt = target.value;
    if (field === "otherCharLimit") option.charLimit = target.value;
    return;
  }

  if (field === "type") {
    const previousType = question.type;
    question.type = target.value;
    if (
      (previousType === "单选题" || previousType === "多选题" || question.type === "单选题" || question.type === "多选题") &&
      previousType !== question.type
    ) {
      question.choiceOptions = [{ label: "选项", isOther: false, otherPrompt: "", charLimit: "500" }];
    } else {
      question.choiceOptions = normalizeQuestionOptions(question.choiceOptions);
    }
    renderTemplateQuestionList();
    return;
  }
  question[field] = target.value;
  if (field === "scoreRange") {
    renderTemplateQuestionList();
  }
}

function addQuestionOption(questionIndex, isOther = false) {
  if (isGlobalAppQuestionnaire()) return;
  const question = getTemplateQuestion(questionIndex);
  if (!question) return;
  const options = normalizeQuestionOptions(question.choiceOptions);
  const withoutOther = options.filter((option) => !option.isOther);
  const otherOption = options.find((option) => option.isOther);
  if (isOther) {
    question.choiceOptions = otherOption ? options : [...withoutOther, { label: "其他", isOther: true, otherPrompt: "", charLimit: "500" }];
  } else {
    question.choiceOptions = [...withoutOther, { label: "选项", isOther: false }, ...(otherOption ? [otherOption] : [])];
  }
  question.errors = {};
  renderTemplateQuestionList();
}

function removeQuestionOption(questionIndex, optionIndex) {
  if (isGlobalAppQuestionnaire()) return;
  const question = getTemplateQuestion(questionIndex);
  if (!question) return;
  const options = normalizeQuestionOptions(question.choiceOptions);
  options.splice(optionIndex, 1);
  question.choiceOptions = options.length ? options : [{ label: "选项", isOther: false }];
  question.errors = {};
  renderTemplateQuestionList();
}

function cloneTemplateQuestions(questions = templateQuestions) {
  return JSON.parse(JSON.stringify(questions || []));
}

function captureTemplateFormState() {
  return {
    formMode: templateFormMode,
    editingTemplateId: templateFormFields.editingTemplateId.value,
    step: templateStep,
    templateTitle: templateFormFields.templateTitle.value,
    scene: templateFormFields.scene.value,
    questionnaireType: templateFormFields.questionnaireType.value,
    channelApp: templateFormFields.channelApp.checked,
    channelWeb: templateFormFields.channelWeb.checked,
    androidVersion: templateFormFields.androidVersion.value,
    androidVersionEnd: templateFormFields.androidVersionEnd.value,
    iosVersion: templateFormFields.iosVersion.value,
    iosVersionEnd: templateFormFields.iosVersionEnd.value,
    bannerTitle: templateFormFields.bannerTitle.value,
    bannerSubtitle: templateFormFields.bannerSubtitle.value,
    bannerButton: templateFormFields.bannerButton.value,
    linkedQuestionnaires: getSelectedLinkedQuestionnaires(),
    pageSize: templateFormFields.pageSize.value,
    popupCopy: templateFormFields.popupCopy.innerHTML,
    questionnaireTitle: templateFormFields.questionnaireTitle.value,
    questionnaireDescription: templateFormFields.questionnaireDescription.value,
    questionnaireRemark: templateFormFields.questionnaireRemark.value,
    questions: cloneTemplateQuestions(),
  };
}

function setTemplateInheritedLock(locked) {
  document.getElementById("templateForm").classList.toggle("inherited-lock", locked);
  [
    templateFormFields.scene,
    templateFormFields.questionnaireType,
    templateFormFields.channelTrigger,
    templateFormFields.channelApp,
    templateFormFields.channelWeb,
    templateFormFields.androidVersion,
    templateFormFields.androidVersionEnd,
    templateFormFields.iosVersion,
    templateFormFields.iosVersionEnd,
  ].forEach((field) => {
    field.disabled = locked;
  });
  if (locked) templateFormFields.channelPanel.classList.remove("open");
}

function showTemplateFormShell(mode, pageName) {
  templateFormMode = mode;
  setActiveNav("template");
  setTemplateLayout(true);
  hideAllMainPanels();
  document.getElementById("templateFormPanel").classList.add("active");
  document.querySelector(".breadcrumb").textContent = `NPS管理 / NPS问卷模板 / ${pageName}`;
}

function applyTemplateFormState(state, linkedTemplateName = "") {
  const linkedQuestionnaires = linkedTemplateName
    ? [...new Set([...state.linkedQuestionnaires, linkedTemplateName])]
    : state.linkedQuestionnaires;

  resetTemplateForm();
  showTemplateFormShell(state.formMode, state.formMode === "edit" ? "编辑模板" : "新增模板");
  templateFormFields.editingTemplateId.value = state.editingTemplateId;
  templateFormFields.templateTitle.value = state.templateTitle;
  templateFormFields.scene.value = state.scene;
  templateFormFields.questionnaireType.value = state.questionnaireType;
  templateFormFields.channelApp.checked = state.channelApp;
  templateFormFields.channelWeb.checked = state.channelWeb;
  templateFormFields.androidVersion.value = state.androidVersion;
  templateFormFields.androidVersionEnd.value = state.androidVersionEnd;
  templateFormFields.iosVersion.value = state.iosVersion;
  templateFormFields.iosVersionEnd.value = state.iosVersionEnd;
  templateFormFields.bannerTitle.value = state.bannerTitle;
  templateFormFields.bannerSubtitle.value = state.bannerSubtitle;
  templateFormFields.bannerButton.value = state.bannerButton;
  templateFormFields.pageSize.value = state.pageSize || "5";
  templateFormFields.popupCopy.innerHTML = state.popupCopy;
  templateFormFields.questionnaireTitle.value = state.questionnaireTitle;
  templateFormFields.questionnaireDescription.value = state.questionnaireDescription;
  templateFormFields.questionnaireRemark.value = state.questionnaireRemark;
  templateQuestions = cloneTemplateQuestions(state.questions);
  updateTemplateChannelTrigger();
  updateRichTextCount();
  updateQuestionnaireDescriptionCount();
  updateQuestionnaireTypeByScene();
  templateFormFields.questionnaireType.value = state.questionnaireType;
  setLinkedQuestionnaires(linkedQuestionnaires);
  updateTemplateTypePanel();
  setTemplateStep(state.step || 1);
}

function getTemplateVersionFieldState() {
  return {
    androidVersion: templateFormFields.androidVersion.value,
    androidVersionEnd: templateFormFields.androidVersionEnd.value,
    iosVersion: templateFormFields.iosVersion.value,
    iosVersionEnd: templateFormFields.iosVersionEnd.value,
  };
}

function validateGroupCreationSource() {
  clearTemplateError("channel");
  clearTemplateError("version");
  templateFormFields.channelTrigger.classList.remove("error");

  let valid = true;
  const channels = getSelectedTemplateChannels();
  const versionPairs = [
    [templateFormFields.androidVersion.value.trim(), templateFormFields.androidVersionEnd.value.trim()],
    [templateFormFields.iosVersion.value.trim(), templateFormFields.iosVersionEnd.value.trim()],
  ];
  const hasVersion = versionPairs.some(([start]) => Boolean(start));
  const versionInvalid = versionPairs.some(([start, end]) => (!start && end) || (start && end && compareVersions(end, start) <= 0));

  if (!channels.length) {
    templateFormFields.channelTrigger.classList.add("error");
    templateFormErrors.channel.textContent = "请先设置可用渠道。";
    templateFormErrors.channel.classList.add("show");
    valid = false;
  }
  if (templateFormFields.channelApp.checked) {
    if (!hasVersion) {
      templateFormErrors.version.textContent = "选择 APP 时请先设置投放版本。";
      templateFormErrors.version.classList.add("show");
      valid = false;
    } else if (versionInvalid) {
      templateFormErrors.version.textContent = "投放版本需先填写开始值，且结束值必须大于开始值。";
      templateFormErrors.version.classList.add("show");
      valid = false;
    }
  }
  if (!valid) showToast(templateFormFields.channelApp.checked ? "请先设置可用渠道和投放版本。" : "请先设置可用渠道。");
  return valid;
}

function openGroupTemplateFormFromLinked() {
  const sourceType = templateFormFields.questionnaireType.value;
  if (!isPopupAppQuestionnaireType(sourceType)) return;
  if (!validateGroupCreationSource()) return;

  templateGroupCreationContext = {
    parentState: captureTemplateFormState(),
    channels: getSelectedTemplateChannels(),
    versionFields: getTemplateVersionFieldState(),
  };

  openTemplateForm("add");
  showTemplateFormShell("add", "新增分组问卷");
  templateFormFields.scene.value = "全局";
  updateQuestionnaireTypeByScene();
  templateFormFields.questionnaireType.value = "分组问卷";
  templateFormFields.channelApp.checked = templateGroupCreationContext.channels.includes("APP");
  templateFormFields.channelWeb.checked = templateGroupCreationContext.channels.includes("WEB");
  templateFormFields.androidVersion.value = templateGroupCreationContext.versionFields.androidVersion;
  templateFormFields.androidVersionEnd.value = templateGroupCreationContext.versionFields.androidVersionEnd;
  templateFormFields.iosVersion.value = templateGroupCreationContext.versionFields.iosVersion;
  templateFormFields.iosVersionEnd.value = templateGroupCreationContext.versionFields.iosVersionEnd;
  updateTemplateChannelTrigger();
  updateTemplateTypePanel();
  setTemplateInheritedLock(true);
}

function returnToParentTemplateForm(linkedTemplateName = "") {
  if (!templateGroupCreationContext) return;
  const parentState = templateGroupCreationContext.parentState;
  templateGroupCreationContext = null;
  applyTemplateFormState(parentState, linkedTemplateName);
}

function cancelTemplateForm() {
  if (templateGroupCreationContext) {
    returnToParentTemplateForm();
    return;
  }
  showTemplateList();
}

function resetTemplateForm() {
  clearTemplateFormErrors();
  document.getElementById("templateForm").reset();
  setTemplateInheritedLock(false);
  templateFormFields.editingTemplateId.value = "";
  templateFormFields.channelApp.checked = true;
  templateFormFields.channelWeb.checked = false;
  updateTemplateChannelTrigger();
  setLinkedQuestionnaires([]);
  templateFormFields.pageSize.value = "5";
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
  templateFormFields.questionnaireTitle.value = template.questionnaire_title || (rawQuestionnaireType === "分组问卷" ? "" : template.template_name);
  templateFormFields.questionnaireDescription.value = template.questionnaire_description || "";
  templateFormFields.questionnaireRemark.value = template.questionnaire_remark || "";
  templateFormFields.pageSize.value = template.page_size || "5";
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

  const isGroupType = templateFormFields.questionnaireType.value === "分组问卷";
  const isDesignType = isDesignQuestionnaireType(templateFormFields.questionnaireType.value);
  if (!validateTemplateQuestions()) {
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
    banner_title: isGroupType ? "" : templateFormFields.bannerTitle.value.trim(),
    banner_subtitle: isGroupType ? "" : templateFormFields.bannerSubtitle.value.trim(),
    banner_button: isGroupType ? "" : templateFormFields.bannerButton.value.trim(),
    linked_questionnaires: isPopupAppQuestionnaireType(templateFormFields.questionnaireType.value) ? getSelectedLinkedQuestionnaires() : [],
    page_size: isDesignType ? templateFormFields.pageSize.value : "",
    popup_copy: isDesignType ? templateFormFields.popupCopy.innerHTML : "",
    questionnaire_title: templateFormFields.questionnaireTitle.value.trim(),
    questionnaire_description: templateFormFields.questionnaireDescription.value.trim(),
    questionnaire_remark: templateFormFields.questionnaireRemark.value.trim(),
    questions: templateQuestions.map(buildQuestionPayload),
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
      i18n_uploaded: false,
      ...templatePayload,
    };
    npsTemplates.push(newTemplate);
    syncTemplateNameOptions(newTemplate.template_name);
    showToast(templateGroupCreationContext ? "新增分组问卷成功。" : "新增模板成功。");
    filteredTemplates = [...npsTemplates];
    renderTemplates(filteredTemplates);
    if (templateGroupCreationContext) {
      returnToParentTemplateForm(newTemplate.template_name);
      return;
    }
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
  const templateType = getTemplateDisplayType(getTemplateRawType(template));
  const isDesignType = isDesignQuestionnaireType(templateType);
  const linkedDetail = isPopupAppQuestionnaireType(templateType)
    ? `<dt>关联问卷</dt><dd>${escapeText((template.linked_questionnaires || []).join("，") || "-")}</dd>`
    : "";
  const pageSizeDetail = isDesignType
    ? `<dt>分页数量</dt><dd>${escapeText(template.page_size || "5")}</dd>`
    : "";

  templateDetailBody.innerHTML = `
    <dl class="detail-grid">
      <dt>模板 ID</dt><dd>${escapeText(template.template_id)}</dd>
      <dt>模板名称</dt><dd>${escapeText(template.template_name)}</dd>
      <dt>状态</dt><dd>${escapeText(template.template_status)}</dd>
      <dt>可用渠道</dt><dd>${escapeText(template.channel)}</dd>
      <dt>业务场景</dt><dd>${escapeText(template.scene)}</dd>
      <dt>问卷类型</dt><dd>${escapeText(templateType)}</dd>
      <dt>投放版本</dt><dd>${escapeText(template.min_version || "-")}</dd>
      ${linkedDetail}
      ${pageSizeDetail}
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

function uploadSelectedI18nFile() {
  const template = getCurrentI18nTemplate();
  if (!template) return;
  const file = i18nFileInput.files && i18nFileInput.files[0];
  if (!file) {
    return;
  }
  if (!file.name.toLowerCase().endsWith(".xlsx")) {
    showToast("仅支持上传.xlsx文件。");
    i18nFileInput.value = "";
    return;
  }
  if (file.size > 5 * 1024 * 1024) {
    showToast("文件大小不能超过 5M。");
    i18nFileInput.value = "";
    return;
  }
  i18nLoading.classList.remove("hidden");
  window.clearTimeout(i18nUploadTimer);
  i18nUploadTimer = window.setTimeout(() => {
    i18nLoading.classList.add("hidden");
    renderI18nPreview();
    showToast("文件已上传，切换语言查看效果。");
  }, 900);
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
document.getElementById("downloadI18nTemplateBtn").addEventListener("click", downloadI18nTemplate);
document.getElementById("chooseI18nFileBtn").addEventListener("click", () => {
  i18nFileInput.click();
});
document.getElementById("submitI18nBtn").addEventListener("click", () => {
  const template = getCurrentI18nTemplate();
  if (template) template.i18n_uploaded = true;
  renderTemplates(filteredTemplates);
  showToast("多语言更新成功。");
  showTemplateList();
});
document.getElementById("cancelI18nBtn").addEventListener("click", showTemplateList);
i18nFileInput.addEventListener("change", () => {
  uploadSelectedI18nFile();
});
i18nLanguageTabs.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement) || !target.dataset.language) return;
  currentI18nLanguage = target.dataset.language;
  renderI18nPreview();
});
i18nPreviewCard.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const template = getCurrentI18nTemplate();
  if (!template) return;
  const linkedGroups = getLinkedGroupTemplates(template);
  if (!linkedGroups.length) return;
  if (target.classList.contains("preview-page-next")) {
    currentI18nGroupIndex = Math.min(currentI18nGroupIndex + 1, linkedGroups.length - 1);
    renderI18nPreview();
  }
  if (target.classList.contains("preview-page-prev")) {
    currentI18nGroupIndex = Math.max(currentI18nGroupIndex - 1, 0);
    renderI18nPreview();
  }
});
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
document.getElementById("cancelTemplateFromStepOneBtn").addEventListener("click", cancelTemplateForm);
document.getElementById("cancelTemplateBtn").addEventListener("click", cancelTemplateForm);
document.getElementById("nextTemplateStepBtn").addEventListener("click", () => {
  if (validateTemplateStepOne()) setTemplateStep(2);
});
document.getElementById("prevTemplateStepBtn").addEventListener("click", () => setTemplateStep(1));
templateFormFields.channelTrigger.addEventListener("click", () => {
  if (templateFormFields.channelTrigger.disabled) return;
  templateFormFields.channelPanel.classList.toggle("open");
});
templateFormFields.channelApp.addEventListener("change", updateTemplateChannelTrigger);
templateFormFields.channelWeb.addEventListener("change", updateTemplateChannelTrigger);
templateFormFields.linkedTrigger.addEventListener("click", () => {
  templateFormFields.linkedPanel.classList.toggle("open");
});
templateFormFields.createGroupButton.addEventListener("click", openGroupTemplateFormFromLinked);
templateFormFields.linkedPanel.addEventListener("change", (event) => {
  const target = event.target;
  if (target instanceof HTMLInputElement && target.dataset.linkedQuestionnaire === "true") {
    updateLinkedQuestionnaireTrigger();
  }
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
  if (target.classList.contains("enable-link")) {
    openEnableTask(target.dataset.taskId);
  }
  if (target.classList.contains("export-link") && !target.hasAttribute("disabled")) {
    openExportDialog(target.dataset.taskId);
  }
  if (target.classList.contains("nps-estimate-link")) {
    openNpsEstimate(target.dataset.taskId);
  }
  if (target.classList.contains("copy-link")) {
    openTaskForm("copy", target.dataset.taskId);
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
  if (target.classList.contains("template-i18n-link")) {
    if (target.disabled) return;
    openTemplateI18nPage(target.dataset.templateId);
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
document.getElementById("closeNpsEstimate").addEventListener("click", closeNpsEstimate);
npsEstimateLightbox.addEventListener("click", (event) => {
  if (event.target === npsEstimateLightbox) closeNpsEstimate();
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
