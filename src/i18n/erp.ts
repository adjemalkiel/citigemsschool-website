/** Single ERP login for parents and staff. */
export const ERP_LOGIN_URL = "https://erp.citigemsschool.com/login";

/** ERPNext site used for whitelisted APIs (contact form, etc.). */
export const ERP_SITE_URL =
  process.env.ERP_SITE_URL || "https://erp.citigemsschool.com";

export const ERP_CONTACT_METHOD =
  "citigems_custom.api.website_contact.submit_contact";
