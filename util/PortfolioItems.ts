export type Project = {
  images: string[];
  category: string;
  description: string;
  title: string;
  live?: string;
  github?: string;
  languages: string[];
  openSourceLibraries?: string[];
  figma?: string;
  hasVideo?: boolean;
  youtubeId?: string;
  desktopOnly?: boolean;
};

const booklerScreenshotsLinks = [
  "https://bnz05pap001files.storage.live.com/y4mWOunKATiarSsayKyzcd4IlxcsNiYiBbbPIRNH9Tgdb9PsVnXxj6Be-vao81B8gLkZnlbroR9quilioF043KMI9IoWm3rXE1okUn8uYvHxyC_k3pUTRmrgDdqws-P9KRLCvcUqsmi83z-9YqOc4QEit5HICB3fWnIhGzwSA2w7hA_50WbHt2EFCZOpjP23A3b?width=1365&height=657&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mZbvqFupHZIrUhiTl-t_xc1BxWMeZBhVifSgh-icG1XoKdhuL18qBjQl6P_xt3aIVUK7-GO905sGGNIjIKSB4HoigTRGFL8t2KmrHIUhuFAu9X7DCqhwOrJyGInKxrN67YTur9DYpXzRbTHY07asik6NrEhMIvJ70prvbi71ICllBV4eeC-wwLaADl-Ux_J30?width=1359&height=656&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mq-vw0kQ1SI3wohtnOmf5LEBGX3ekAi9yu6bal30Dk7jBEbm20EpHqIk9wFksrmkJFnlvJzp0ao04Ac1v94hkXvJn0_tWq0V-jKABkc2mCU3AxD2XdCfOUTP3ArlNMf_R6nhdWpPkuQvvLvx3kvEU3LOFcU880dcfjvfSyS1LDzaQkEi_KSR27g4Y_mG_KLvX?width=1360&height=658&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mD7dwzMWyKYIRWcB04H7OUUTCpKv1AHwHIQw8mAF-8lVY1C_lmhQSlbe2gPMuz862H8GxTm1pSnA64qab3qEybvGzIvhnS0wkSRifOUbSPlwNN3JzbFmzM5Mixt3-mkm4YYZ_XvS4ZZL7psAMhSsvLkCOWnzXP3HzTYkvARWxbmKgHqkkQjWIE2YHI0O0erSn?width=1360&height=657&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mKKsiVusL6dp7aFas_koWNcofj8LT2eLmjRKoDmoC9a44S1tpDXxck943_KtkfS5nqkAendLCfEaRnloVVP7T8mp_AyCSvcIRSOpzmDpccSnODe8o-EOicVtN8W89A-Xzk21fkF5oJ_88MDnJfqQUH1LwmLlCtp3TZMj4GgrF2N0DcS6WJtZ8adWSZEFavK4Z?width=1365&height=655&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4m_QeYrgpL_D7rOh8aMOtUtDDrRf3k3yVjvvx6qW3NL5pgOL6c0Y27osVOH-xYOHNQbnkh-RzrXIuponmIpu7LghCKh4EN6MdgObO6Owr-y0dHtaXNew0-UedQ-c_2csnJXJdKLpj1_ERKQM_73U0rtKIoIUxorlkqGEIxYmGUfbmqnpsd-wB4KnC6GFqucDGz?width=1365&height=659&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4m350YNKrG-bDASdYrJaLVGJCAXg04tJVQRUkx-yIPEl27xLkPyBYx9FVHx-7k8mgXs5js7IopxzdIvyawIFymuDej1iseMg-FpsWuiPzXNy_jH_FymffFiiRa9DVVl2EdaYlXdwX6UhlA6E7xMZal_5jAQRDuA7omlrel9Lye8b3BA_45dI5WZxb-Qb8W6vfK?width=1365&height=662&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mETuEDldSjvEaOXgMXiDMgmKvSnXiECienfdQfGdyDwBkQgQNKaRyw69k14Vxxvv42B1x5_Z16ufbQjN1VIAOzcZj6ACxKlyfSuRiLu07vLTLGmXyfzTMCo3S1p0nGBWmODCjKQzwBMqfJC8wPoYQ0Iz-Zigm7Jg2evJwxVVADygdc3o-0M8HIlBoLY450QCq?width=1365&height=657&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4m9-djDVU9dNuD_opqKp7rw2JrAXbb3EOsCrDe8SoI3peXL6LfFBlT3AbDu5mILb-Q9L-5tgAlW9BD1XIj8H9dkWal3Bw4xBczfHzHMf0Vxj1oBXYT5Khn3w5nMiUTcOtIzlB2DXhj1zJ8L-vyKSo4Qg1e2Kx9gmrucSDamayztQLFQVAbY8lP8G4UzRysNZoF?width=1366&height=665&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mSZvz1mEl9pgJvvhRXEwEaumi5lpP6ilp_umPF3wmVplmrbRF-5hnZYNZHaYabbfCh2aEfVJL2JRDARFLtA1POgcZh5VjPsGHahKXuHFpg-y7yYkUbcPDiF2kPSumVCh_OhCQ3UBHEebBhbUPwFW7j2Gu5cu632EvGaLb4nMowITsh9UwoJhf_xc-4-VcNoI8?width=1365&height=658&cropmode=none",
];

const magloScreenshotsLinks = [
  "https://bnz05pap001files.storage.live.com/y4m3kJrKWGBo5y28Q1PhoIUwxDp6WEOcBaQ5PTpezDnuRKMCND3YcsM_KWNjghvE7yECciSSRcuFBp9yWQzHJd02-vmBLdBCNpld4E-pWH8EAONpd_I-S5-hRRcMd_z3qdlJm0fYwD-0CM-zrC4fhIj1aEfUzwkDNX7Gmb1ORRKMn-Sp18ba8REbMxwEw1XTKgZ?width=1365&height=661&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mWqJYCbir1xpySvsJGTxMJU3vwVj74buFdTHJQcxFndRubCjVjPbJUP8HVGSG-PofTS3hWtyvD_HDRL-5dFFBUfficAB4pezAjddTYD1ykPveioyR8rG0PkMUzDitLqDXMihs3hA9ToCIAcEnSysEW1-WHmCpX9KBF_z4GC_lAoUPl9p-0poEDh0fGhZKdgtw?width=1365&height=659&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mXYXuj2AzF5KWVqEOTATpFHLQNJcouXCI_AKTNZbvRc-SwyUM0oFcCfowivcMqPgOfPIPI2SbOSImd5AdfPVrcT6YjzrBheBDcJtpSiMI_GDpsjVED9IeAKRPTzaERhXRdjELFyCpVweYINdAFNY5j530SyeS0uSmXfUmB8ma8Yj-zsv10kFEJASO-M2WMulT?width=1365&height=658&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4maTlJQVkpMBXEDIMA3EpmcsLeUnRp2GrVVHemgqoP0Iip3rizo2yfNpGLr8EeuQj5PJ5FWRyYZE0nSl-0iWwJj9VNdJf7AhFmiVeU4hmRMG-_GuFRWka4__G-e6n7BmIc9V05fMcwKMigFbAHhbpxckTfR3I0oueVXEEMkpszHvHHf0oBTCOAaDJYfZFhFgOL?width=1365&height=663&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mQUYRwW9DIq3tWVKLiYNO7hm8t5YoSoUlCGDLDayEYOOs41_dX6XvOIynBOYaIcFZ40duDVZhxvP06cUN-_TVNpp__ZshCu7q3yoWks8o_4MFwHu5LR8DByUzu-lpCeJMX3KZcts0mTGXxIxRd86ZJDsDGWAZdWHnG98mUenCxLjK_kO10T5ctdFdWgGNwBFg?width=1365&height=659&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mChpB2UkgmYSGftmNJTR9q226RCi2dLg3Jd0QuQcOKoLLnjvxrJn3kLOtbHW2y_J_ZmLiqczAR0spnTbsuFt7Z2O-12hiTGIf0k2OFWwqmacWpE26lgN25SiFMc04O8BCUdzbPUYKxl81Oz5kQ-nwTi-MvQmX-dk-oMJqGlCfkXntJMLXtszAvB4v3xwSzLA0?width=1365&height=663&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mYngDPvgTrfPhPiYHG4CBHjIDNYsJoHp3-9AlaKjVFE9gZGnJ5ja4R2QGol-i_aiAbdNZa0Ci4LYQjCOacIAlJQPkyKWXtm7ekLF-a_4lgk1-BFiCRKXiwlOIRCc9_7TyGgM2CFUN-bFbiXVc04-wWvZr1vSBxjB0Qi3jlx7vX5jDNr8raJ9uJhTayzPJTohT?width=1365&height=658&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mo7PwUMVQdZqVdxGYyAPvckjE6F_qRmE9aK-w1S5MW54PmCoMHiGt5fMo34-z2Cg9pOSwLQfUI7pwnv_30bJEW6upoqQ9unzgr8VaEd-g82zUxfgUkLInrWqVbjM9WT6vBsv9XprUs6nwMBGtqf9tAB4YBWnP6Bj_oEK49UU-I0RgYd8dklUJhZeJZEiAwd9W?width=1365&height=662&cropmode=none",
];

const interiorDesignShopLinks = [
  "https://bnz05pap001files.storage.live.com/y4mNzwEeMBG9mWuvRYSeWVMRgVjtvzVP5ocN0PdNCfw86d4LGyAD6xkICYNQ8nHiOfnvo3JAUPAiGNWmEU25b48pMKv_izF9ovlRJ-8VTuVGVluEUx9TtKJo7tGgpIOE8oy7GHdub_hHJfTRNloHZxON7HbOwh1wq6mfQhFDmEnJH9ENdGck9B1cpGIqjJzSqVG?width=1360&height=661&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mr9wZ3L5sEy9ZQdoY0PKR3l89P9giYA0Tm8yM8xmGMyCKVbY_vqdCoPNkCQbryk9ZPgQV_gpGo1gWKCtwY5BA0rVHRf_f-e5CIDiZP6T400qb1WWEsy62iIrf4TNsRofQurrNOSgg71loZOabVRu0PpfTZ0vKOvrWc_zXqOQSaWKB0acSsdPjirsbOCq-9TO5?width=1365&height=662&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mCEZRFiBrJTz1sZxYreMZN-m6qEQv9MapUSxvyvd9-R4u3XkxrwZzNmfcepiZeL5BGjbx-BQCyUCGFDuIiKZ4ctevBEltdBX6aeTYlx96ry4uZCWfSDMJ9UQtdpwXoosOkI4C053KCWogrd_mn6MadK_xOMBFnANQOFK3nJaAipv6qE5APCNePfuz30ajQLxw?width=1360&height=662&cropmode=none",
];

const spaceTourismLinks = [
  "https://bnz05pap001files.storage.live.com/y4m2zw1MBdaHnKUjJOEetg9OQanePC6vSBhkps70PG5eHAV89HXk0YoE-yWvUyRhSqYK9Ajtv_2TwrYb452tQqjma7xxa769-6k1H2aLLxJ9a1zsdPFI71FlMgXT-p-aTecnOcFTaJioPG89zqlGfLkgnbHAC9W8SuTPG-TdjI4Ykn8s44bc25NE_yn7XyV_fuU?width=1365&height=662&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4m2UmdRRTk8NR6nhDYHtex1TSpKZilyjM2vC_ahmfOjGrfc3DxOHZUebxjUra9Xl0rqkuCMWqZgKrp_j2e3eyC48ViVsoD8tQ3VB51LANkltHz50pBGZPfoc8WGEAwi28SZGjnF5AMR7dNLSmpzAZ3Jb0Uanp_eJGGBmA7juSj7iGVsX_Zk4KAMn1WiCJCDKPa?width=1365&height=655&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4moe99GPMMr3YqP-DS1BnbTifE2h1sFnOsSO2R7aZpXhepOMnG5ISmk47rTd6_h3eiorC1Etxm4jwwKi-spabSUu7_P_brBi1SN_i14AYkrrAcduc6fkmFK8OanjYH-ZV41RMTWpO2YQl7ORkBxqAgTeOHpsVliWmb8U_g9WE5pXLEz8RY2RAQ9FK9p6Cb5S2H?width=1365&height=659&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mpuxyOoSSqXdtRFrZleo64o0XFmmoQLgmqn86oo5guRkEdcOCupmfao9cV3jhTNG4FnINP_yhgikFTCM1gJv7i9-jrkmGWXoiomBydPRX1QKIDK0SQk8zzgZXizRIuWDhFrgo49yxwstZxjzyL9AY9ZmcpqXXIygX7RCICGjnf81wPBaeb3rYjk1DlUOa1oVD?width=1360&height=657&cropmode=none",
];

const cafeInspireLinks = [
  "https://bnz05pap001files.storage.live.com/y4mFggOW0gqk9cHJkfMGx1JJgN2Z8yGo6QxTzfswnJdnGDNMIuUkpMmzfPk1_wzdO5jawpgLeJryGrs-WgzziLYjnSSbqtZ6fQPGyPrb51QfuHwwoIuu9qbETDtIKQUAu1WBvZezWmRhV-ecYBIQeY4st0Dijzl9Bo4R2et_0PbJBMM_bUOgndfcZCtvdkT4iZR?width=1360&height=657&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mCSbxk8zfjTVetGwmtaurRQ96jc6o31pNOaMmf6aoz6W0qrWO0IbAHIaYcC4c55TiJsKny0-sC6mgkEtJ-h3WgxCppg4oRVt63kePJi82n7KCNJ2IQhV6WokR1f7Rz9JpvUhMfSRSmGI9pZ9JMaU6PilKtCtu_frykgXhZFg0jroAZZGWpzcDTwRbDsbcwni3?width=1365&height=661&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mKjR4UOq_rAQaPTDf4GDUpxkXWGrz2KS4HKVP8CFtUxPAY4ApFSMa1ahlvLWjzfMOtq-xDn6rJFVsyubq5hROh3N0kKDQBl6dOP62NjN-aotRabQVwt8p5330kwu1SJfJ8VbK329X6d3t4SfkSxlUr3CRPFVlUeSwt-nPCO6DzUEkibqpMHuL_xtL6ze_cqyu?width=1365&height=658&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4m0WVhX9wkvHoWgAFS9-rhxRpDB2eFpJ58b7OhjlZHO-E3r3yPVdo9NSsBWQHDo-W3_rgo4l97R7D4zdgj690HxfaGSWhYIj3Knuy_qFegoGJJzeS7fSVYIE1S-twhgv0pSdtUfUX4Sfj0MSeUCe18XPLIQvUEHiv5A7PihpAtGWQmXiV20lRJr5FNh-CAils8?width=1365&height=655&cropmode=none",
];

const reactNativeBeginnerLinks = [
  "https://bnz05pap001files.storage.live.com/y4mf40whgKy3CaSdU_uLdvemwBpBfmPz2RG-mcaCt1_uOPdbbt9KI-NWAESLLIsSE-Pcv1BVOpTZlRXIrmFZwg6A979Mhz-QP340OUyiKzwJLqmkGh6a9fURmYE8tixG4zQK2ba8fWiTjVBDIDlYQG6EgvBBLfAsnk8g0tfBRnyXiNOvJi19udm6MLc0YyYkS8B?width=720&height=1600&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mRL_a_U9DNZTSP8J-lPYV3cNg5IHIeMJtc5x5EpmBsb8wSoCa696dFtefjPlWuNHmgMk3ssLOr4EfAcgtO9q-dTDFmSoEIOyhcejZ5mnwpA1HOcOpITjSML5ZunAnyLCaI8aGYz-zaNJmR6Nh07tCkgNnGG11RM4UvVS3wbM88C_EsmuJk2sapKx2bD5CZyj0?width=720&height=1600&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4my7xglyaDWgq7_GPufD-8imbszWpKesdhP4JYqonnUoKYAWHQPb_spH9wHleq8KlLnqaXdJsnzMdm7h-9S9H4x9Jph3cr9FbU-2Qrzblwnsc5SxjH5R4NKxHQNKF9kVSE5AkaCJcf2t4pFCx5B54IgvZRf6k7ZC979Y09QAnqxY233dvLOFvrBIMZzCznk7jU?width=720&height=1600&cropmode=none",
];

const sunnySideLinks = [
  "https://bnz05pap001files.storage.live.com/y4mZ8qB1yYgS1FBac5YLGU9jZc4AS3EYRqu_Vjtr8UEl2KdrOTn4xx5WhnASzRWTvEH27fMaDlgDmKgfPZRg-MeFP0fC979vWneUrHtsyLpqQyHyFQIb3Zkw6kZVld44Ijo1I5FJXekRxhWPkJ8AZON3aIpIxdJ9SL2J6t0WW_mWclr6GcJiIxtVZPaKnbGbDin?width=1440&height=1056&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mRC4TJa3F3_FnuGr2YAlKylsrOpBuAIylLV7tkwEvpnU-ZAilYzsXYTvAot4NLKb2T5becYWE6PmlnxlGZxVxOGpFE95qkZXdTuwYbMZZUF69XsnmRo0R66CEckIhKqH9FFyB1OqldwScgdjxuyFx2OWEqLIivMKmkdw4jz0-8tNsGnnmlyCPsi-pZN5x5Rno?width=1363&height=663&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4mcsqfgSdHwGd832SjifEkfAcUKZBLBlt8iAfEErzBDIX-ToqiK1cPIJWgMLU6Ni67Gg5TRwYxA_j7vTS2CWidlbevFKV2H6ZiW_tnPi3tJO0FyQu8bqWiF1gwryVV_SonWeZe0Y1hOvt6VBtyf5DEtdg3D2z231bp9_TtS7JUQVbGvixl7ft-0HQ7AknOZIcQ?width=1365&height=662&cropmode=none",
];

const tipCalculatorLinks = [
  "https://bnz05pap001files.storage.live.com/y4m4vex939BANBFkFBJlJGVOvCpSvp21hV2MR1k_aqXx6ppD9Q5OkZGtUCy4t3CTKH6OIlE67Ai7iFhioeXEgYPcLbClMEgxRDo5r4nEzLIKI8gha8m1cx5ElO8F_qKz9vQpSzlfsWdlQFvr31PgJn9tmitRcWHr5WvmfPTBVjTCGabQuZSM_UTYr6HW_wOpB70?width=1360&height=654&cropmode=none",
];

const easyBank = [
  "https://bnz05pap001files.storage.live.com/y4mI9uRFd90NlcmxU2jH3YatDPLqdw9E2guVSJa6tsbTUsDRZwBE9b2luTe7DbswEnG9QwnIl3xCeiHZLRdjS6g9DPxzaYELNLeryWOgU_Fsrv_EBFL6NP3yc6iGwAEWLb1ZyX8ktFUNMD78mF_YCXO3PrZjBofPhR-XttFEjf5pWk7gA1miiKVfKmeef_Kkn9n?width=1366&height=768&cropmode=none",
  "https://bnz05pap001files.storage.live.com/y4m8NLh4-krUgaKJlVJhC1L3haGEYsyKOCPJ9oPlbSP-cji4nYvG7YzObCjKFIrjP5WcPSK2VhhTVk7TKwhMVKyhu860Leiqqn5EcAnNeX2adOErBKqK2u87eKqd754HYTr7gjkK6Ha0G1bO1d8W8wgOWCB1XQKtUtQ0sY5rd6DDWXgnCGitmP69rg2682aevYj?width=1366&height=768&cropmode=none",
];

const jobListingsImages = [
  "https://bnz05pap001files.storage.live.com/y4mSzJ74AiSUly-hLILEacfpKjYqitG27IwwIHFR5DBX5gw5SK4jekjM9WlD5mNdxIZpsP7r3rQ_Rsf0AXiLckC0_VVdg1gzlXp8RLc0XwlrAYfR1fJrArkSJZ79qxxDiO67QVFQxrr09XppDdscdMqWSGZWepvpD_JrnaFZnRkIQPXI9OECmqaxK7Tw44RchF0?width=1366&height=768&cropmode=none",
];

const portfolioImages = [
  "https://onedrive.live.com/embed?resid=1C403039BA3174B0%217510&authkey=%21AHRsGOWH-qI1gYk&width=1359&height=661",
  "https://onedrive.live.com/embed?resid=1C403039BA3174B0%217509&authkey=%21AAdSYAhBlIr6tPg&width=1360&height=661",
];

const webtechafricaImages = [
  "https://onedrive.live.com/embed?resid=1C403039BA3174B0%217511&authkey=%21APiuxEFWFrJYVJo&width=1341&height=659",
  "https://onedrive.live.com/embed?resid=1C403039BA3174B0%217512&authkey=%21AGLvq8iCNT2DIc4&width=1357&height=653",
  "https://onedrive.live.com/embed?resid=1C403039BA3174B0%217513&authkey=%21AEVHpWXdWk4x2y4&width=1332&height=655",
  "https://onedrive.live.com/embed?resid=1C403039BA3174B0%217514&authkey=%21AC9gzp6tV2BCLWo&width=1354&height=646",
];

export const webapps: Project[] = [
  {
    images: webtechafricaImages,
    category: "Fullstack",
    description:
      "WebTech Africa is a startup that i built in conjuction with some of my friends from campus. We were aiming on how we can make ourselves useful to the general community and founding a web development company seemed like a rather reasonable approach as we were not only highly skilled developers but we also needed jobs where we would actively sharpen our skills. I was the one in charge of the technical side. I built the website using NextJS for its SEO capabilities that make it a way better option to create-react-app. The site SEO is highly accurate as it ranks first on google on brand name search. The backend is built using java and spring-boot. I also used firebase for user authentication and firestore to store some of the user information. The source code is however proprietary software and cannot be shared to the general public but i am willing to give an overview on a video or some sort of screenshare on request.",
    title: "WebTech Africa",
    live: "https://webtechafrica.com",
    languages: [
      "/next.svg",
      "/firebase.svg",
      "/react.svg",
      "/typescript.svg",
      "/tailwindcss.svg",
      "/firestore.svg",
      "/java.svg",
      "/spring-boot.svg",
    ],
  },
  {
    images: [
      "https://onedrive.live.com/embed?resid=1C403039BA3174B0%217546&authkey=%21AIz9R0wSrvGlfO8&width=1366&height=768",
      "https://onedrive.live.com/embed?resid=1C403039BA3174B0%217551&authkey=%21AGITUf4-jwJ2R8Q&width=1366&height=768",
      "https://onedrive.live.com/embed?resid=1C403039BA3174B0%217549&authkey=%21AOzu7OOGbOJlF5o&width=1238&height=693",
      "https://onedrive.live.com/embed?resid=1C403039BA3174B0%217548&authkey=%21AFDaJ9zRvwM40gA&width=1238&height=693",
    ],
    category: "Fullstack",
    description:
      "Mixine is a failed platform where users were to be able to view their spotify playlists in video. I eembarked on this project however without reading the spotify developer policy and it comes to no surprise that spotify refused to upgrade my app from development mode. However the app still can be used  but it requires me to manually add you to the user list otherwise you will run into a bunch of 403 errors so be sure to message me your email first. The app by now has 11 users which im really proud of.",
    title: "Mixine",
    live: "https://mixine.vercel.app/",
    github: "https://github.com/amosmachora/mixine",
    languages: [
      "/react.svg",
      "/javascript-large.svg",
      "/typescript.svg",
      "/icons8-css.svg",
      "/tailwindcss.svg",
      "/next.svg",
    ],
  },
  {
    images: booklerScreenshotsLinks,
    category: "Frontend",
    description:
      "Bookler is a simulated booking platform that provides a visually appealing user interface for viewing real-time flight, car rental, and hotel information. Although only accessible on desktop, it is highly recommended to give it a try. Authentication is managed through Firebase, and Google Maps React Library is used to provide interactive maps. Additionally, Bookler makes use of multiple APIs to handle real-time data flows for flights, car rentals, and hotels. This allows for seamless integration of information from various sources to provide up-to-date and accurate information for users.",
    title: "Bookler",
    live: "https://bookler-six.vercel.app/",
    github: "https://github.com/amosmachora/bookler",
    languages: [
      "/firebase.svg",
      "/react.svg",
      "/typescript.svg",
      "/tailwindcss.svg",
    ],
    figma:
      "https://www.figma.com/file/UnC1I2rEMII5sGNZgPHakj/UH3tyvpilexm1LB?node-id=0-1",
    hasVideo: true,
    youtubeId: "SPdNNw0E5XU",
    desktopOnly: true,
  },
  {
    images: portfolioImages,
    category: "Frontend",
    description:
      "My portfolio website on which you are right now. Built with tailwind, vanilla CSS and React its my personal website where clients , recruiters and visitors can view my project and get in touch with me.",
    title: "Portfolio",
    github: "https://github.com/amosmachora/portfolio",
    languages: [
      "/react.svg",
      "/typescript.svg",
      "/tailwindcss.svg",
      "/javascript-large.svg",
      "/icons8-css.svg",
    ],
  },
  {
    images: magloScreenshotsLinks,
    category: "Frontend",
    description: "A payment method website called maglo. Supports dark mode.",
    title: "Maglo",

    live: "https://maglo.vercel.app",
    github: "https://github.com/amosmachora/maglo",
    languages: ["/tailwindcss.svg", "/react.svg", "/typescript.svg"],
    figma:
      "https://www.figma.com/file/Dmjkoyr5Mzg3QPJm6u66w6/Financial-Management-Web-App-Design?type=design&node-id=148-5561&t=rTwnI3G9SBsr8FdZ-0",
    desktopOnly: true,
  },
  {
    images: [
      "/Pharmaone-main.png",
      "/Pharmaone-second.png",
      "/Pharmaone-third.png",
    ],
    category: "Fullstack",
    description:
      "A pharmacy management application providing capabilities to sort, search , organize medicine into groups, delete medicines and visualize sales in graphs. All the data is pulled from a Java Api on AWS",
    title: "Pharmaone",
    live: "http://pharmaone-env-1.eba-kpvrrp6a.us-east-1.elasticbeanstalk.com/",
    github: "https://github.com/amosmachora/pharmaone-frontend",
    figma:
      "https://www.figma.com/file/zdvyjDTe9grMoInsFnwzxM/Dashboard---Pharmacy-Management-(Community)?node-id=33%3A549",
    languages: [
      "/react.svg",
      "/java.svg",
      "/spring-boot.svg",
      "/javascript-large.svg",
      "/mysql.svg",
      "/icons8-css.svg",
    ],
  },
];

export const frontendMentorProjects: Project[] = [
  {
    images: interiorDesignShopLinks,
    category: "Static Landing Page",
    description: "An interior design shop one page landing page",
    title: "Interior Design Shop",
    live: "https://amosmachora.github.io/room-homepage/",
    github: "https://github.com/amosmachora/room-homepage",
    languages: ["/react.svg", "/javascript-large.svg"],
  },
  {
    images: tipCalculatorLinks,
    category: "Mini Project",
    description: "A tip calculator application. Obviously very useful",
    title: "Tip Calculator",
    live: "https://amosmachora.github.io/tipcalculatorapp/",
    github: "https://github.com/amosmachora/tipcalculatorapp",
    languages: ["/react.svg", "/javascript-large.svg"],
  },
  {
    images: sunnySideLinks,
    category: "Landing Page",
    description: "A responsive , brightly coloured landing page",
    title: "SunnySide landing page",
    github: "https://github.com/amosmachora/sunnyside-agency-landing-page",
    live: "https://amosmachora.github.io/sunnyside-agency-landing-page/",
    languages: ["/react.svg", "/javascript-large.svg"],
  },
  {
    images: spaceTourismLinks,
    category: "Landing Page",
    description: "A multi-page NASA themed landing page",
    title: "Space tourism website",
    github: "https://github.com/amosmachora/space-tourism",
    live: "https://amosmachora.github.io/space-tourism/",
    figma:
      "https://www.figma.com/file/ySQbyd9GdUtaQLwD4rWuvq/space-tourism-website?node-id=0%3A1529",
    languages: ["/react.svg", "/javascript-large.svg"],
  },
  {
    images: easyBank,
    category: "Landing Page",
    description: "A simple bank landing page",
    title: "Easy bank",
    github: "https://github.com/amosmachora/easybank-landing-page",
    live: "https://amosmachora.github.io/easybank-landing-page/",
    languages: ["/react.svg", "/javascript-large.svg"],
  },
  {
    images: jobListingsImages,
    category: "Landing page",
    description: "A react application that filters and sorts jobs",
    title: "Job Listings",
    github: "https://github.com/amosmachora/job-listings",
    live: "https://amosmachora.github.io/job-listings/",
    languages: ["/react.svg", "/javascript-large.svg"],
  },
];

export const extraFrontendMentorProjects: Project[] = [
  {
    images: [
      "https://onedrive.live.com/embed?resid=1C403039BA3174B0%217528&authkey=%21AGyw-5K9c63S2PQ&width=1348&height=649",
    ],
    category: "Static Landing Page",
    description: "An interior design shop one page landing page",
    title: "E-commerce product page",
    live: "https://amosmachora.github.io/ecommerce-product-page/",
    github: "https://github.com/amosmachora/ecommerce-product-page",
    languages: ["/react.svg", "/javascript-large.svg"],
  },
  {
    images: [
      "https://onedrive.live.com/embed?resid=1C403039BA3174B0%217529&authkey=%21ANrmfx-bfdiaiHs&width=1342&height=655",
    ],
    category: "Static Landing Page",
    description: "An interior design shop one page landing page",
    title: "Expenses Chart Component",
    live: "https://amosmachora.github.io/expenseschartcomponent/",
    github: "https://github.com/amosmachora/expenseschartcomponent",
    languages: ["/react.svg", "/javascript-large.svg"],
  },
  {
    images: [
      "https://onedrive.live.com/embed?resid=1C403039BA3174B0%217530&authkey=%21ACkTeZpFcoVvHvk&width=1360&height=659",
    ],
    category: "Static Landing Page",
    description: "An interior design shop one page landing page",
    title: "Rating component",
    live: "https://amosmachora.github.io/ratingcomponent/",
    github: "https://github.com/amosmachora/ratingcomponent",
    languages: ["/react.svg", "/javascript-large.svg"],
  },
  {
    images: [
      "https://onedrive.live.com/embed?resid=1C403039BA3174B0%217533&authkey=%21AB1FCfGgcodLGVA&width=1338&height=648",
    ],
    category: "Static Landing Page",
    description: "An interior design shop one page landing page",
    title: "Stats preview card",
    live: "https://amosmachora.github.io/statspreviewcardcomponent/",
    github: "https://github.com/amosmachora/statspreviewcardcomponent",
    languages: ["/react.svg", "/javascript-large.svg"],
  },
  {
    images: [
      "https://onedrive.live.com/embed?resid=1C403039BA3174B0%217532&authkey=%21AH4CZxm0GxMAJ8Q&width=1345&height=648",
    ],
    category: "Static Landing Page",
    description: "An interior design shop one page landing page",
    title: "Theme switching calculator",
    live: "https://amosmachora.github.io/calculator/",
    github: "https://github.com/amosmachora/calculator",
    languages: ["/react.svg", "/javascript-large.svg"],
  },
  {
    images: [
      "https://onedrive.live.com/embed?resid=1C403039BA3174B0%217534&authkey=%21ACZlScb7aGF2xqY&width=1365&height=650",
    ],
    category: "Static Landing Page",
    description: "An interior design shop one page landing page",
    title: "Chat app css illustration",
    live: "https://amosmachora.github.io/chat-app-css-illustration/",
    github: "https://github.com/amosmachora/chat-app-css-illustration",
    languages: ["/react.svg", "/javascript-large.svg"],
  },
];

export const watchalongs: Project[] = [
  {
    images: cafeInspireLinks,
    category: "Landing Page",
    description: "A cafe landing page",
    title: "Modern UI/UX landing page",
    github: "https://github.com/amosmachora/Cafeinspire",
    live: "https://amosmachora.github.io/Cafeinspire/",
    figma:
      "https://www.figma.com/file/yvClSI9AZBRX8UaaGEByF3/Modern-UI%2FUX%3A-Gericht?node-id=53%3A2",
    languages: ["/react.svg", "/javascript-large.svg"],
  },
  {
    images: reactNativeBeginnerLinks,
    category: "Mobile App",
    description:
      "A job search application where users can search for job postings posted on muliple sites. Built using expo and react native",
    title: "React Native Mobile Application",
    github: "https://github.com/amosmachora/reactnativebeginner",
    languages: ["/react.svg"],
    hasVideo: true,
    youtubeId: "XDnTzmG0np8",
  },
];

export const websites: Project[] = [];
