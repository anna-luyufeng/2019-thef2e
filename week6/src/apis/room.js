// baseUrl https://challenge.thef2e.com/api/thef2e2019/stage6/
export default [
  {
    name: "list",
    method: "get",
    path: "rooms"
  },
  {
    name: "find",
    method: "get",
    path: "room/*"
  },
  {
    name: "booking",
    method: "post",
    path: "room/*"
  },
  {
    name: "clear",
    method: "delete",
    path: "rooms"
  }
];
