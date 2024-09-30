const waitTime = 10000;

const colors = [
  "#E46E6E",
  "#FFD635",
  "#7EED56",
  "#00CCC0",
  "#51E9F4",
  "#94B3FF",
  "#E4ABFF",
  "#FF99AA",
  "#FFB470",
  "#FFFFFF",
  "#BE0039",
  "#FF9600",
  "#00CC78",
  "#009EAA",
  "#3690EA",
  "#6A5CFF",
  "#B44AC0",
  "#FF3881",
  "#9C6926",
  "#898D90",
  "#6D001A",
  "#BF4300",
  "#00A368",
  "#00756F",
  "#2450A4",
  "#493AC1",
  "#811E9F",
  "#A00357",
  "#6D482F",
  "#000000",
];

const userAgents = [
  // Windows User Agents
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0",
  "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36",

  // macOS User Agents
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.2 Safari/605.1.15",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",

  // Linux User Agents
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36",
  "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0",
  "Mozilla/5.0 (X11; Linux i686; rv:91.0) Gecko/20100101 Firefox/91.0",

  // Android User Agents
  "Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Mobile Safari/537.36",
  "Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Mobile Safari/537.36",
  "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G950F) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/14.0 Chrome/91.0.4472.77 Mobile Safari/537.36",

  // iPhone User Agents
  "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1",
  "Mozilla/5.0 (iPhone; CPU iPhone OS 12_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1",

  // iPad User Agents
  "Mozilla/5.0 (iPad; CPU OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1",
  "Mozilla/5.0 (iPad; CPU OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Mobile/15E148 Safari/604.1",

  // Edge Browser User Agents
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 Edg/91.0.864.59",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0",

  // Safari on iOS
  "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1",
  "Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/604.1",
];

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function randomPixelId() {
  return Math.floor(Math.random() * (1000000 - 0 + 1)) + 0;
}

function getRandomUserAgent() {
  return userAgents[Math.floor(Math.random() * userAgents.length)];
}

function headers(queryId) {
  return {
    accept: "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/json",
    origin: "https://app.notpx.app",
    referer: "https://app.notpx.app/",
    "user-agent": getRandomUserAgent(),
    Authorization: `initData ${queryId}`,
  };
}

async function httpRequest(method, url, data, userData) {
  const { pathname } = new URL(url);

  // Cấu hình các headers và method cho fetch
  const options = {
    method: method,
    headers: headers(userData),
  };

  // Nếu là POST và có dữ liệu, thêm phần body
  if (method === "POST" && data) {
    options.body = JSON.stringify(data); // fetch yêu cầu body là chuỗi JSON
  }

  try {
    const response = await fetch(url, options);

    // Kiểm tra phản hồi từ server
    if (!response.ok) {
      const errorMessage = `Không thể Call API ${method}:${pathname}:${response.status} || ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }

    // Trả về dữ liệu dưới dạng JSON
    const result = await response.json();
    return result;
  } catch (error) {
    const errorMessage = error?.message || "Có lỗi xảy ra khi gọi API";
    console.error(`Lỗi: ${errorMessage}`);
    return null;
  }
}

function sleep(ms) {
  // Chờ thời gian reCharge trước khi lặp lại chu kỳ
  console.info(`Bạn phải chờ ${ms / 1000} giây để tiếp tục`);
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getStatusUser(userData) {
  try {
    const response = await httpRequest(
      "GET",
      "https://notpx.app/api/v1/mining/status",
      null,
      userData
    );
    return response;
  } catch (error) {
    return null;
  }
}

async function getStartRepaint(userData) {
  try {
    const response = await httpRequest(
      "POST",
      "https://notpx.app/api/v1/repaint/start",
      {
        pixelId: randomPixelId(),
        newColor: randomColor(),
      },
      userData
    );
    return response;
  } catch (error) {
    return null;
  }
}

async function claimPX(userData) {
  try {
    const response = await httpRequest(
      "GET",
      "https://notpx.app/api/v1/mining/claim",
      null,
      userData
    );
    return response;
  } catch (error) {
    return null;
  }
}

function parseUserData(iframe) {
  return (
    iframe
      ?.replace("https://app.notpx.app/#tgWebAppData=", "")
      ?.replace(/&.*/, "")
      ?.replaceAll("%3D", "=")
      ?.replaceAll("%26", "&")
      ?.replaceAll("%25", "%")
      ?.replace(/\r/g, "") || ""
  );
}

let isFetchingData = false; // Cờ kiểm tra việc lấy dữ liệu

function getIframe() {
  return document.querySelector("iframe");
}

function reloadIframe() {
  window.location.reload();
}

async function gettgWebAppData() {
  // Kiểm tra nếu đang có tiến trình lấy dữ liệu
  if (isFetchingData) {
    console.log("Dữ liệu đang được lấy, vui lòng đợi...");
    return null;
  }

  try {
    let iframe = getIframe();
    if (iframe) {
      return parseUserData(iframe.src || "");
    }
    isFetchingData = true; // Đặt cờ khi bắt đầu lấy dữ liệu

    await sleep(10000);
    const lauchButton = document.querySelector(".new-message-bot-commands");
    if (!lauchButton) {
      console.log("Không tìm thấy lauchButton");
      iframe = getIframe();
      if (iframe) {
        return parseUserData(iframe.src || "");
      }
      return null;
    }

    lauchButton.dispatchEvent(
      new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
      })
    );

    await sleep(5000);
    iframe = getIframe();
    if (iframe) {
      return parseUserData(iframe.src || "");
    } else {
      console.log("Không tìm thấy iframe.");
      return null;
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  } finally {
    isFetchingData = false; // Đặt cờ về false khi hoàn thành việc lấy dữ liệu
  }
}

async function processStatus(tgWebAppData) {
  console.log("Bắt đầu tô màu.");
  while (true) {
    let statusInfo = await getStatusUser(tgWebAppData);
    if (!statusInfo) {
      reloadIframe();
      return;
    }

    for (let i = statusInfo.charges; i > 0; i--) {
      console.info(`Số lần tô màu còn lại: ${i}`);
      const result = await getStartRepaint(tgWebAppData);
      if (result && result.balance) {
        console.info(
          `Bạn đã tô màu thành công. Số dư hiện tại là: ${result.balance}`
        );
      }
      await sleep(3000);
    }

    statusInfo = await getStatusUser(tgWebAppData);
    if (!statusInfo) {
      reloadIframe();
      return;
    }

    await sleep(statusInfo.reChargeTimer);
  }
}

async function main() {
  const tgWebAppData = await gettgWebAppData();
  if (tgWebAppData) {
    console.log("Dữ liệu lấy được:", tgWebAppData);
    await processStatus(tgWebAppData);
  } else {
    console.log(
      "Không có dữ liệu tgWebAppData hoặc đang trong quá trình lấy dữ liệu"
    );
  }
}

async function handleClaimPX() {
  let tgWebAppData = await gettgWebAppData();
  if (!tgWebAppData) return null;

  console.log("Dữ liệu lấy được:", tgWebAppData);
  const claim = await claimPX(tgWebAppData);
  if (claim) {
    console.info(`Claim $PX thành công: ${claim.claimed}`);
  } else {
    reloadIframe();
  }
}

// Thay thế setInterval bằng setTimeout để tự động điều chỉnh thời gian chờ
function scheduleClaimPX() {
  setTimeout(async () => {
    await handleClaimPX();
    scheduleClaimPX(); // Gọi lại để tiếp tục lặp
  }, 1000 * 65); // Lặp lại sau mỗi 65 giây
}

main();
scheduleClaimPX();
