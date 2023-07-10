const private_key="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDhVlE4xU+JGIcZ\nzIV+wWFEb1DxQgnmpnbt1lEUTzs2Ppgsnz1fcpJI1fmfwmtVpLbpKdOiaMvcoOA6\noLcwAQKIVNh0BONwo1uTOj7FTSjPOx788VsTLDELyWR5pL2Tarr6QwADYb48I9FG\nmvnGvzEhQ9D+Sono2LDibmIZ0YAfpWEFmJOLqzDj9rHwzf/Vnj8Y6rk7ulVv5xe/\nOd3AwyS/1RpLEFT7NHN8HrYNJzqmuGh/BEbAeJGxSVTtjDUWeexkQfuEQ2Lkz790\ntAEGKtCJ7jHiOYmEkSgCa2W+3C/s06yenkjolc9OveCBzQ40vLcHgZviW0AqFei8\nSvX7kKPJAgMBAAECggEABJphit4W95c5bUi9Al+bZ805U1BUyPImFEowOlC7Birl\nq2WuWISL4fKDCKUtUaDNfrpUwSjQX0enBPOTAmdG4LeQ+1+9MKgZnwqNzTR8DK2p\nvqOEh4H714CL7aM0ny4LN0EGn0sQGoTlycIxL4Lo00PiIUuvAQNqK5nzJZFew2aw\n4j60L6rM17L6KW7+zpl2nV+r0pqDkYZP3DKgZK7Eol0Y+c/nURsKtKD+nVONHZK2\ntTKpWkybEyykn5fy0QnXj6gPFd1XlG4UQ+KjIHZCEoU/AwNQMXy4EVo88hXZVUA9\nA4zOFYYQzrny4i6HCCb9yPKJYDbOILdCpYvvh443oQKBgQDy1/RvMgrTvilM+A7m\ngExi/++duca2H4sQ7RRCbHKODo+0IP/i6bVIHRQ2gwlqT7Yik1nkiKt9cpZktWoe\noSTVMYkXa8dw/xwIEq3RfsBza1Dd9+z7pXc7P3ZNnFgLvy9SaMrO/zHxddCUfasu\nYje0KtLFBG+ilGCpzdT9/19jEQKBgQDti5ATpIprTF5FxYQ0OtTavgwi9el0YH4u\nl+wH+wfQwFVZXqA4gid7XZGNAdaYJPDp6UzdqPcf2yAqWoohXEy0n3Uam95Kw5YK\nF/3deatfgSETCoF7yo/Bb5LL3tzJ8x0z3NipUemo0p2JLr6KdGKy2MwI3yDzAnzQ\nQAyvj6BFOQKBgC7ZEHO/IK2WmtsZY65+A755h11TMI2D6k0an3Ts/PCAyKJEV3kM\nAwflbDfT8aYLuKRU7tuSrhqmV3MYOF+uUK+8PalCBpi67kp0aAnpPPFHO7OGl7Y4\nRpcseAMi7S1e9Z8dTjq+qoDdbJ6o27Q4CGz+cejGIU8o9rjrV3KkqF8xAoGBANtf\nFsg9HSOoHCudE9FUP3xfJEApD9bMwdrvrCdWmcobxPZKn/ZvpFyWdbNd7jsFaoLq\nVHUj9Ey0BYl3obbbUW9BD1lqdqhe5bIeo/CjyzLgwpWeDyQuVgISsuOZxhaucNqT\nanc70Wh6UMf+pjKg9wEpm4vZ28jwFCoR7GU5Y45pAoGBAND75FvVgqIHg3pF6MMh\n03/BLR00AekhkxTXZk4HP/vAyYhYkcwsA+A1IpbBfUtdRVNqAvyGESMuLrRGddfs\ngTCpTZOEwEXqpLlndCGqrqV59OaapHaw7ulLqy2YWq7kk9q7BQQ5ogVTDdJ7dLrL\n8ehwHS5jKHzkAmu8oWXBGsTH\n-----END PRIVATE KEY-----\n"
const firebase = require("firebase-admin");
firebase.initializeApp({
    credential: firebase.credential.cert({
      type: "service_account",
      project_id: "drive-app-391910",
      private_key_id: process.env.PRIVATE_KEY_ID,
      private_key: private_key,
      client_email: process.env.CLIENT_EMAIL,
      client_id: process.env.CLIENT_ID,
      auth_uri: process.env.AUTH_URI,
      token_uri: process.env.TOKEN_URI,
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: process.env.CLIENT_URI,
      universe_domain: "googleapis.com",
    }),
    storageBucket: "drive-app-391910.appspot.com", // Replace with your Firebase Storage bucket name
  });

