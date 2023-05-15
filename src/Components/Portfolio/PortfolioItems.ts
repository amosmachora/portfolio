import { faFigma, faJava, faReact } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  pharmaOneMain,
  pharmaOneThree,
  pharmaOneTwo,
} from "../../Assets/assets";

export type Project = {
  images: string[];
  category: string;
  description: string;
  title: string;
  live: string;
  github: string;
  languages: IconProp[];
  figma?: string;
};

const booklerScreenshotsLinks = [
  "https://bnz05pap001files.storage.live.com/y4mMeuvohLe_PtCRoDunnJUfC7_Yqxo5gDqFjnYEQEKj71Z4t79aQDjdvwFgF6Ed90d4fQfLW3s9RHfmCw5UDP2CxXxmQFOgM3tBw13pOIVR78kRE6zQlnaVgXfYOf8aNqaspROB8rV-KKUv5F16CXSolYGZ7Oged_tVu3wkP-toZ0lVI5-i6286sedzJBcp0xKr1_aywM0hqvlPAN0KdNnlhzca8occTI6s9_3pXhp_qk?encodeFailures=1&width=1275&height=615",
  "https://bnz05pap001files.storage.live.com/y4mfIZs_0LXiqv4mb4bRT7Xkq4kzeE-q30XYjqHm3Y_kEGRwQBahcAF421Nc0-XoPJtAT9dA7CzGUX9lUC-IdTNrS_TxFL-bvbp0rAuWbj8U4b4jo1IQFvxIH62xD9bzNrJvtchtRZaj9BBU9nDv5ChfSO1RjZvPAhAq7Gv1aplx4_r83Js4pq9RoPwanTxwZw4CkKA60vuB0CyiP4XeuKHhOnnv1fmaZTM_IffmiEcqiE?encodeFailures=1&width=1263&height=615",
  "https://bnz05pap001files.storage.live.com/y4mMuz__vJRsiBAtlC_-gio3hgp2gLbdm-RfTrGaqzgwkfMx3xb_YrOci5_wQr7PPUNrdVHKreclFqMjrOXlwTsjiFQriz0VavXdrHjYnYvCdJNe0AlmNUbIXALMvJtvhkEUuw5RyL1ktk8fNCDzNHicgRo4RMxlyNk17VukRfG0fNIklmbdxHaa0PWr2cBAYA-E6x8rk9YtnMvdSwNbawx3GvJrwyMfUI5RN3jBSaUNNE?encodeFailures=1&width=1277&height=615",
  "https://bnz05pap001files.storage.live.com/y4m-Hax-hzSuEa6zdODoVo4M9LPJsGLQrailv7QEsE_-KztPVTCT0_5KQ28C1n5iGk4wTlxx3LLd0mhslUhNK_W-gIjCcsAcVeWoAp-c-1f8yHwR15eZxV649chiEI5pFoxRpF7leQd_OCraDVLSdBUsQlDVr5-K3w7aISbRFHDo_s_YCikaSdUc6yPfddWqk5FKWyuZyX97MLwERBwRsh2gnISlAjtauHPoYCnwo5CAkc?encodeFailures=1&width=1268&height=615",
  "https://bnz05pap001files.storage.live.com/y4m6bRWwueT9BKIOwbA1ECcK0fQppttkKSIv1Ab8cIa2ZPgFja0PTS4zEJX_JHWi6n4DGPnv2qOX_-XmhfrpB_CHqSplr1swJvlEjyv-pfhwj7vX3-vZihdYu-ObFebGPq2H98vWpbSudfQuyY8L_HxwRdFpsL_zW-25NQNUjRKf0RS2ebLDaBYNH4QQwkJguOgbb2ej9-pvDabCN9fGZZonqe6GTHqcxbQNJAFOdKUsj8?encodeFailures=1&width=1273&height=615",
  "https://bnz05pap001files.storage.live.com/y4m91Nt4t76huhq_LTgFoM5Q5W6_B5_70ZSQJutm8aTmdilxp4BmqFf9b2SRwyfhh78W3mvIkZ8Xlzi5NaqoIVDGR7tsRxo-1x_Mg-SvHhkNK3o7CooufFJgVPSrUlLi4NvRi9s9fORWTcCis95UsHnuVp2vpDIzWSijRO_B4f2VFQG4fSN_TRyiqzKmjOwNhVXXaVnC_OHElE1SdmMbDfan2Xz7jaGMT2qcI7Qrfk3ETc?encodeFailures=1&width=1281&height=615",
  "https://bnz05pap001files.storage.live.com/y4mRlA5PD3vBAFeVaHW-k4DrBtfI1gM9tZCmb9cYKa7Zh4-6YNE8Nt3fT89o_ZHzcmbTr1RLRtcOyBSUuw8Lrt8efz_Jy2Ek2TRFvK5jjkJslNiXZtiyhX44eC1s1bIzXp-hr8X4x2wy-b-7r4u8avncq2C9wg2RqsdIVdkrEh9t91W7P-glmmmdKXYNn2EWqp9AtaQcPe2ms21ssAzeXa-0BzjbQsv5iYOKKakduJ0NkI?encodeFailures=1&width=1273&height=615",
  "https://bnz05pap001files.storage.live.com/y4mcolkzR_HkLhXtgtf4s4GtBuQDn4LbDRly9uzJKmesYl29kUZq5RH9sozcZPlVb-HstCz4oyzOa6ovJBjv_O8tuKgM6QxFmFIFx4NypeoZWVzDXN3R5v0MdcnKv69CA2jqoplGhvp1JatYevoU1P9tjWB0PQomiQxqWbrBpI_qvjs8BvMx2AFOuMBGSIxYg01wdlO002XZPjTvTLNFeZo7MrPsL_wSYjNb8yo-I9_e9A?encodeFailures=1&width=1271&height=615",
  "https://bnz05pap001files.storage.live.com/y4mcXx7upb-x8j1CeNhwAkujZ-bwo_hii0lfj_tL8vvehNK2UTOtijv7MZhw6GjT4FkdrOxFMpLgrRZJqKviKHre9WIBPosWkTMzzIh1tMibaZyulzYTDE2jBQmgX5Sv4ODDTzvGIBXB0m-7u0ZrNLQAIAOukQQvOgjRlUqqSU8ChKane4e6-Tvzix4F_6CuNKcFL4ec3i_G1FnsHnIVcvcYo_uFax3ouwNYU746wlAveM?encodeFailures=1&width=1274&height=615",
  "https://bnz05pap001files.storage.live.com/y4mfwZUb8ge3LiKUrbSRm3uPetkXnQvQwfp92JE4IWpPvkV2e9thm9PiKymy1Mk8QJdAmE8pq6Dz2eUGisugoeYFG25TdoiLHRZgbYvbGP-0_HL-AOX335_z1nkWLgIEwCPtPYebhOEFmubNTSr4gaJVv8dTqt_5cwL0jcDNTl6W1Inn_hynGlJ4AkyMLmOqcEjul7iIATM3vy9GqD4qMS9aVGXwsgqkAI1WRKqkeBjsDc?encodeFailures=1&width=1277&height=615",
];

const magloScreenshotsLinks = [
  "https://bnz05pap001files.storage.live.com/y4moYAVxQNxB0C1yZi9m1btOXTWseIQMSTo2tK1tybIzY4b0cEh0cAYn9whi1IN_JzlASxEobE3h8H8iQcS9AeZm7WhWK_Dr1WGrpO2WBD1mWBXpzbFw5w0eKRm6cVj4Z7Hmx2aEk7V9kkpXM4Z9J0YjhT4T8ELS_jeiJxj_TCtUDqdH6BA2SyRG8289LqtPRLVa6Idz6057_EmHWO_zfOpxvsybvQz6XGtCVdImZmVKo8?encodeFailures=1&width=1268&height=615",
  "https://bnz05pap001files.storage.live.com/y4meD7bvfEXoCbEkhNJod2_sEX-hss_WE1DCHhH0dlOw1YP82azQCHieQ9tiDh4Pgt47Os6p1DD4B6JdiPimJDFLwinAFTtnV3TxGaYtQekOK5EikEkzGelBEhcaDrkVcE_2M7ugfBs7_ClaOB-EZrmhd96M1rSEgR9mvah8nO7tT-D3zOLpvn6JIi1xLnRCJRbel1N0i5qIgnzgycpWzT6eVuFWmAAFWUWhol3iVngkP4?encodeFailures=1&width=1275&height=615",
  "https://bnz05pap001files.storage.live.com/y4mFrQuxYY2C4Fhjv0p_DdmgZRNSY547eBdA8xePEzNlezJD0qqy09gcfVCOc_sYDxNjSU-DvJ_N0d6sA4lvRJqcb56lfpqGybGnW3Qr9Fuhuz5O7I4U0Gzsx9Ctby-tT0x9lDwCsUcwrEUEB1xejFVrt-2SCxX_DszhXHUFt3JRAEFd44-bZNk6yRYcgQqfmArLmfPljX2JXbgiJ9kuengMDAg37y5RN-Xn6BTG80Sbo8?encodeFailures=1&width=1266&height=615",
  "https://bnz05pap001files.storage.live.com/y4m9bX_i0bRBe_B6Mk2tK4qm3LgBDcPIl0EMDFU3noaHcODEV8H4LKOU0y3ugrsABnIduTepHwaPSws4Vy3wtkJ4OfaSpiy813ZMcDDhEOkOrELvqcig5hh0ia8v4fETVE4l_jkoDQ_GyqRVQFsrSIF4IK5xIPSQpnD9eObR9HEY6rq8ePBeElBCgHcktAFWw1YptFi9VC2vkA5IYV0NpZhxkfaHkhXGkDvInWWhHhrCBs?encodeFailures=1&width=1273&height=615",
  "https://bnz05pap001files.storage.live.com/y4mUyanaBNZuXP7E_pI74M2wE-RHnsiuWYSUVQJi7e0ZqJDoW0ORWkhZd9Me634rr1D_bnHIAjUDstEdybLogVTDBwy0_0SsUa63Jni0PKGgLJEoc2wKlQYfadvFuKnUOVEP6tGwPBVv1wgFH4Dl56CEl9f-LeP9-YXhpA2xEgl5U0hPgtustmUBAf2glC82Dxm-xfS8CuhlTAUxMV2TV9Bv3hnNnxxkeZGVwAYykUisi4?encodeFailures=1&width=1266&height=615",
  "https://bnz05pap001files.storage.live.com/y4mL-Eknke5s3G4sG3ErxOOz4rEBwJJLrL2d78joaITVJhqAW1HrGPvA15FHS8CyYT4qXwG9NY4PiCmLIu6h4Z3I-2cfwlN_X_tfBcPKvc9CFNODQgSeNEAMWiM7Rs3XvKJogt-Qg5H9uoy3J7ZLl9KpFpVio3RcFKml_lrljAqGF9N4Lii60VnQZePCOwjG8C1EG_QX9UT6qYDvvQ8qjxs1EZtgeh-WkeTU5fCBDWcDRc?encodeFailures=1&width=1275&height=615",
  "https://bnz05pap001files.storage.live.com/y4mR4YVb_2JGK6VsAUkUCpsFjyS3h9sCu7ZUuO7ZK7IeL6G5gDldwkM_04BzmUv2D0Lt4nMB9oUUOpmQaFj1oFEXjHyYhQfmeyehzJXT4Y0GzEjlRyPhumnM-uwtn9qRv3qFZG39uNwZ5vMm3u_aStwPh8OuVfQEDl2g6APvaza1HPzbhMNyqBWXgypIY7lbp5oMXt4_-eEabFOlVP-wB14cLLNgMAj_A53NEfnsmXYazs?encodeFailures=1&width=1273&height=615",
  "https://bnz05pap001files.storage.live.com/y4mncDdqm0YnPDbmdBN45GAY6MLWBftHB6T8cg_OEQz97ZP2Ls7a3Ci-4wxPUsXTNUYUoA_qJxagKSvm17kHbQj0_J4HmkAyjM3PV-Nfn7AFrpYw5cB2lu0aFUHsqi8HIdhvTmerdzEp2C6i5cteg3GEARml_k7w08shlZrkxroQ11c0OSRTfv9AsFpECzg_J0H3t8_qRWtQ_qf64aHYtpyzdMRWiugFkkD4eZuE7C-JPs?encodeFailures=1&width=1270&height=615",
];

const interiorDesignShopLinks = [
  "https://bnz05pap001files.storage.live.com/y4mKUQfizRFCeqfRjwBaXPlhfXznmfa8GYK2xjsRBMXIE0PH6RMK6DppSPTx8URZkOGSlhYCXw_pmfG-iIL-95WXSSgiP85KFohNFAU0aYk94_thxPE-qEQ_x7OpKt4nyd0awS8vX1sGLlzKivmPxQRpdVl-gFM8gekewMVx4umw93hhBov56t53imhG4T5Iaopw1bfX3ZhP8AyHpEuaD7CIPwlBqOLaE8iDFs8rZK5s2g?encodeFailures=1&width=1263&height=615",
  "https://bnz05pap001files.storage.live.com/y4mRJ6HuGmV6PJgxt75jkTUHZbIljcnhIkUR7zhy4iqaLvPVqCIPSPPDo7a4nHq4vULtyoNYwBq2ayctC36dIqh9S00WYBgOmkv0RpztLniWCzFfN4l6b0zmwosgKdwQG4HIxmOhYy-QEFuW_eqNvrVw8cN6rCfCnIGJOT4UjmeirGEbbNlEbwUKfiPje_BJqCvtgxTYsRd7M79gdDKxR2XOGEXTrwXzpkI5rLQGizzm-s?encodeFailures=1&width=1268&height=615",
  "https://bnz05pap001files.storage.live.com/y4mj9SamRdYEV4ReT5wodCS9GcRhgQvQEv17JcJ0IGLyZ63AXTuzqjz07OUJJMfzzECMlgQzHaSVm9eKPeWPVu4BtoR3yVy0BNCwjpXIPj92SJLLg83rsdczImGbVd-pjLmQ-yMQ9GCSXHxDI50dT9QQfSGQ471MZrRoVoCsWiVcHfNCXKzvyl9zY9EfUcVG3oBereHKCam9psuhzEixA6zLdjLL4MU2WYJ45SC8ixUjbs?encodeFailures=1&width=1265&height=615",
];

const productPageLinks = [
  "https://bnz05pap001files.storage.live.com/y4mkBuzzIucaeDeGy1JYJNIdeey27Ohr6-LmhD_ZnlptNFc0sCNPYCpQuh8qcybKRER2I79dFBTk7XuVmz6PS1nOcBMvttrcqUCgyMWQ-OlaiukPjw9wjJT1XXq0wMb8YpVgFBi0OPzkD9sbIfLCSgixjgYRXB3l5FNhFAK0UtnDu4Jk3gqep_zC8dH62A8DSZ9oB-pEdzzCyNOQReQtQz90Gv_bwN6kjDTPXVb3vHImcM?encodeFailures=1&width=838&height=615",
  "https://bnz05pap001files.storage.live.com/y4moU9NIaICk1towh_or4nX1fUpW1ipzSJTepMbL81XhubnDlEiCtvP1IDn6N3iKgmojgGTDYmRttGZJPfNX1KxW3XNpZmflsDDp2DmlK2cgoDG3GCRMlSIG2YLHB8kARsjhptpBh7DLgYc6mI4EMH5ScilhvIIID-QOUcQjCtGDO01_VKzxSyd4n0nZXN8QvIs0z9WP7-pB53csL8m3suBxaJcePTeee7_nYLpwz0pxmc?encodeFailures=1&width=984&height=615",
  "https://bnz05pap001files.storage.live.com/y4mIgAOoTwMKTvDHw3JVWzCQjiaK7POlbooeTxFfc86gAGpEgufpuLEsJjdJSS_Xi_p3xKi4vOIFCvZoRBuOMVoxi_D1IfCp3grrajpegBVQlS04mMDO_XOL_rtxGpGKAV5eqkbl1bKE5Jlzn2acP4iOexMeduGOTM_9efs1au52w5eEmL61Y1RrRX5rqTbE77tceqTyvvClQbvPRQ5N59HK3jY7CKkcmygERWgpho2E1s?encodeFailures=1&width=256&height=615",
];

const spaceTourismLinks = [
  "https://bnz05pap001files.storage.live.com/y4m-yg0zDhc01sjsjkBP-YPP9LlbxFjMkshsMCcmPN14xCIroaP_0LgsJndUemPKKWEid64SF4j5v6aVkPz50F4RXi0uNKLzsAXv6jxeYo0B_FopqTscJxEHbM6ebMu6MOBqKt_vUNpd4_mjw0xeTWnhqnLMvR5v3eO3q77XkodPaA9JyT8w8LwaZvEH7KkoPFfibQ5TtnE_1lx3eDjowMNTrcexZRP9f6eA_ImKEdF_io?encodeFailures=1&width=1273&height=615",
  "https://bnz05pap001files.storage.live.com/y4mhyWqmO_fRb2SifUE7MyXjRrR0ALTfOIO9pN49u9PnkJze-EQJ15b-MAcGYNCK-9u9egLHBXDzusI1DXGwYbBL0IOJpViGplX2NVmYvJvShstiMLp-xlzbGykU42lnGqa5IQwBYFQ8aepP6e_z-lcaRxDkdcdDn8IKp779Pm--g2R42w-tD-ArrYdkjCmMrLMECjPgBMi_QFhuzwOdhQiajx0-U91WKSqwm9HRqrJDQE?encodeFailures=1&width=1273&height=615",
  "https://bnz05pap001files.storage.live.com/y4mjrXavAqSHL9yPpZMjJc4bleU0Ky4beMvxcdzGgGGzSy6QxV4yjxi0hcy_4lP4ojZCG4lEs6VPESngnIOCDG4Vrs3apxZh8BCBg5fL4fygWn5A3JyGBWV2mRXDe3SR0zFFeChYY5h1ozk8iqb82Ob9wobrwakCCydFqANHKwNvCd1ASxe_AwwMoUi6Kt-kvZwSwu7DYkcWns34DupIc1efOr4_XRe1d3PR9KIMQDmBI0?encodeFailures=1&width=1281&height=615",
  "https://bnz05pap001files.storage.live.com/y4mOgtUMMuANBwRWudyVqhSLCS2KuyFkSn-SRHk7Z3_SwUhd0mkFo45FHdp0YfV2UddXrEyDVcbj-MCodSbX7SN40FZVfLD82HVQmlmy2MYLkQsJfttkMWFp7C_KYJupfjlwxbOZ0pjL_dYkB41YjTiGtLsbJ83yeHugJpJyJwNH2rDCtaDLPA-uNR87Dyce1M-E2nZUNtYWAqwiFN77wzygdmbQkDgGR2GAUgKw4qHZq0?encodeFailures=1&width=1268&height=615",
];

const cafeInspireLinks = [
  "https://bnz05pap001files.storage.live.com/y4mcg0AwDfu4Hic15LxJUKUYUWE7jRbvgsuMZUafOeiYpGEtEx4I2dZLM47ePHaTUNUTG5SKLHGZf3qCcDexcyCrrdQ7yTOhZOPQkebpn1WvYX5M4vB7KW2B3a5qfaPshRrhag5fl74tI34Z47hwQUsjpuQc_rka6zuXMrToRA77gm6WTWa4k_4iPdyOmJbci66JOXpv_0f-6lAa8p3casUG8hNmz8x4DiuG0jEiwVLPAU?encodeFailures=1&width=1273&height=615",
  "https://bnz05pap001files.storage.live.com/y4m2GeAOEhIThfKsniA43QU622rWAbKGHDxfRdvMeK8E78LsEXTgAqZ0jdeMWYvkbdKhGUAsd-iFUfgtojZfVwdXhxa0vKkQxFXqz8C2stcBAT-nUPbjTSwgmwGjZ02dJZhZARdErCGVj9uZse3oqfeCN3gyvnypUB8wTmAuHk1T5JaFuiBKnYVzuW6AtmDaiE0H8phE9Rp9Sg-isdWCpNzlZEkeF8G8dPyBjn3XCW0tQg?encodeFailures=1&width=1281&height=615",
  "https://bnz05pap001files.storage.live.com/y4mTjnYeVfjGuMLQlAFuAVe854Uy7d_E4FAiNLt1oZvDgHbxjWwF5mJG5At1ed0AZP6SOGKMKcA3VedWoPTU6mEceLWpH9qiVEeEBE6r62cMjnoJBnUjE_8QlAPTMLXVOUL1ThK13uDInBpyVo8nlSFqrEpL-jYsi1BOvh-EUZfWddxAv3N2rMV0CQ-yBh_8hRqunvBT9zrFus5_e7sMa2EKrbP37AkbpaQLPdAxf698dQ?encodeFailures=1&width=1275&height=615",
  "https://bnz05pap001files.storage.live.com/y4m8poxfA6QCYe6FkqJbGrC0SmFNTsSi8HaZXVuXzB2ZnraYKCiOOjYzUHCnfp5wnCkD1IMFIRPx43H7DF_kx5OskUjXoFNR_0j0QIek0um93HFujd3z3GXZd_mIAHh5IeIibXmW-rmADUfVAX6j7I_XRDtw-ReG-oMqmjreen1vC6ueDL09Oip0uZCKTTmvwzSp4JKRvz5s5FN6aoXKNBjXmbGGtnt1NrbB7xKgE8mC8s?encodeFailures=1&width=1270&height=615",
];

const sunnySideLinks = [
  "https://bnz05pap001files.storage.live.com/y4mRWYqXaJSfQ5t2QoUpGwlu7EoUDr965lrkQV7JyjSrzZmzp3NKZPR6Yor9VUpD1SPRrtZoavxbwCa-u6pttVBoMqyuBpQHBHOHf3uXxhiLuuoirJOUxGjexYGuF9ghAe02DkQoZiRnidUXAKS3UL1lU5mNfgH66Ov88OXBzAP1CTatVwkSI6tUR0uufonBrV9Ufx8QSiu58v9EJHxntBfkInRf_SeggVrvDrBQVv5HPo?encodeFailures=1&width=838&height=615",
  "https://bnz05pap001files.storage.live.com/y4mgLKxc4grxoo-Bu0tmEZ8DTKgC_wfS7Ky-ICoVYg-_ZaRmAKdw7qZggP5jJ2Ogr2F8y0ff8ukvWpwymj1wzyEojGI_4uSfAH5PQveZofqScda5Tf-tfnYWmfagVT0tjavH5n2XIuw2l089DAwBaXwqjn89A5nUTUZ5_HeHKOAaecQ5Yay2EtiypkNQg5B4OYq5wuPdRvGi2up6ZcCJOQNobJ3fu2wJEOETpoqvEgXLbI?encodeFailures=1&width=1268&height=615",
  "https://bnz05pap001files.storage.live.com/y4mlXxXe4yeMu4WNP5z1NDP7El0fc4y7fxs0Yfq5YFFUkCdmeG2-pw4T1KTThnl2wgML_ASfny6NzmyFRU3ei66CNUjpNg2qsz_GCzKm-8SLQRkz3ul2dLcSYg1BrGgMwTzIf1lT05bDBBsmWRAlorsdyCObQ2B3N2Anezk9ohmzIKjg4_-02uHlA35m-ECzE-RPi72jg7T8ec44aGTMx4K4vj0xMFbnU4pIytSs2qi8b8?encodeFailures=1&width=1264&height=615",
];

const tipCalculatorLinks = [
  "https://bnz05pap001files.storage.live.com/y4mvMJp-_ITJ5L6aaef5Brdw3YNhK1bxEx_BnHkGHij7cLBahXVeA_TO-2z8qXVdrY4CIOrVKAnjcHi-Ir4iMUqA5_xzCCsewQsElo2vy6iBw6M6SMLgFkONa9GjMNaRQljMGnr5dolTHUPlxzcCm_uFdx4BzTR54zffLwArBHml8GNtckhm_zqKR1yi3hqUUVk-oY0jn3UQquKXko-1mxrvJVFy7VORFr3HUF80v0UwdY?encodeFailures=1&width=1278&height=615",
];

export const portFolioItems: Project[] = [
  {
    images: booklerScreenshotsLinks,
    category: "Web Application",
    description:
      "Bookler is a simulated booking platform that provides a visually appealing user interface for viewing real-time flight, car rental, and hotel information. Although only accessible on desktop, it is highly recommended to give it a try. Authentication is managed through Firebase, and Google Maps React Library is used to provide interactive maps. Additionally, Bookler makes use of multiple APIs to handle real-time data flows for flights, car rentals, and hotels. This allows for seamless integration of information from various sources to provide up-to-date and accurate information for users.",
    title: "Bookler",
    live: "https://bookler-six.vercel.app/",
    github: "https://github.com/amosmachora/bookler",
    languages: [faReact, faFigma],
    figma:
      "https://www.figma.com/file/UnC1I2rEMII5sGNZgPHakj/UH3tyvpilexm1LB?node-id=0-1",
  },
  {
    images: magloScreenshotsLinks,
    category: "Dynamic Web Application",
    description:
      "A payment method called maglo. Currently in development, Supports dark mode",
    title: "Maglo",

    live: "https://maglo.vercel.app",
    github: "https://github.com/amosmachora/maglo",
    languages: [faReact, faFigma],
    figma:
      "https://www.figma.com/file/Dmjkoyr5Mzg3QPJm6u66w6/Financial-Management-Web-App-Design?type=design&node-id=148-5561&t=rTwnI3G9SBsr8FdZ-0",
  },
  {
    images: interiorDesignShopLinks,
    category: "Static Landing Page",
    description: "An interior design shop one page landing page",
    title: "Interior Design Shop",
    live: "https://amosmachora.github.io/room-homepage/",
    github: "https://github.com/amosmachora/room-homepage",
    languages: [faReact, faFigma],
  },
  {
    images: [pharmaOneMain, pharmaOneTwo, pharmaOneThree],
    category: "Fullstack application",
    description:
      "A pharmacy management application providing capabilities to sort, search , organize medicine into groups, delete medicines and visualize sales in graphs. All the data is pulled from a Java Api on AWS",
    title: "Pharmacy management application",
    live: "http://pharmaone-env-1.eba-kpvrrp6a.us-east-1.elasticbeanstalk.com/",
    github: "https://github.com/amosmachora/pharmaone-frontend",
    figma:
      "https://www.figma.com/file/zdvyjDTe9grMoInsFnwzxM/Dashboard---Pharmacy-Management-(Community)?node-id=33%3A549",
    languages: [faJava, faReact, faFigma],
  },
  {
    images: productPageLinks,
    category: "Dynamic Landing Page",
    description:
      "A small product page that mimics adding item to cart and lightbox images viewing capabilities",
    title: "Product Page",
    live: "https://amosmachora.github.io/ecommerce-product-page/",
    github: "https://github.com/amosmachora/ecommerce-product-page",
    languages: [faReact],
  },
  {
    images: tipCalculatorLinks,
    category: "Mini Project",
    description: "A tip calculator application. Obviously very useful",
    title: "Tip Calculator",
    live: "https://amosmachora.github.io/tipcalculatorapp/",
    github: "https://github.com/amosmachora/tipcalculatorapp",
    languages: [faReact],
  },
  {
    images: sunnySideLinks,
    category: "Landing Page",
    description: "A responsive , brightly coloured landing page",
    title: "SunnySide landing page",
    github: "https://github.com/amosmachora/sunnyside-agency-landing-page",
    live: "https://amosmachora.github.io/sunnyside-agency-landing-page/",
    languages: [faReact],
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
    languages: [faReact, faFigma],
  },
  {
    images: cafeInspireLinks,
    category: "Landing Page",
    description: "A cafe landing page",
    title: "Modern UI/UX landing page",
    github: "https://github.com/amosmachora/Cafeinspire",
    live: "https://amosmachora.github.io/Cafeinspire/",
    figma:
      "https://www.figma.com/file/yvClSI9AZBRX8UaaGEByF3/Modern-UI%2FUX%3A-Gericht?node-id=53%3A2",
    languages: [faReact, faFigma],
  },
];
