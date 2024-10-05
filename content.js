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

const originalPixelIds = [
  472471, 472472, 472473, 472474, 472475, 472476, 472477, 472478, 472479,
  472480, 472481, 472482, 472483, 472484, 472485, 472486, 472487, 472488,
  472489, 472490, 472491, 472492, 472493, 472494, 472495, 472496, 472497,
  472498, 472499, 472500, 472501, 472502, 472503, 472504, 472505, 472506,
  472507, 472508, 472509, 472510, 472511, 472512, 472513, 472514, 472515,
  472516, 472517, 472518, 472519, 472520, 472521, 472522, 472523, 472524,
  472525, 472526, 472527, 472528, 476471, 476472, 476473, 476474, 476475,
  476476, 476477, 476478, 476479, 476480, 476481, 476482, 476483, 476484,
  476485, 476486, 476487, 476488, 476489, 476490, 476491, 476492, 476493,
  476494, 476495, 476496, 476497, 476498, 476499, 476500, 476501, 476502,
  476503, 476504, 476505, 476506, 476507, 476508, 476509, 476510, 476511,
  476512, 476513, 476514, 476515, 476516, 476517, 476518, 476519, 476520,
  476521, 476522, 476523, 476524, 476525, 476526, 476527, 476528, 477471,
  477472, 477473, 477474, 477475, 477476, 477477, 477478, 477479, 477480,
  477481, 477482, 477483, 477484, 477485, 477486, 477487, 477488, 477489,
  477490, 477491, 477492, 477493, 477494, 477495, 477496, 477497, 477498,
  477499, 477500, 477501, 477502, 477503, 477504, 477505, 477506, 477507,
  477508, 477509, 477510, 477511, 477512, 477513, 477514, 477515, 477516,
  477517, 477518, 477519, 477520, 477521, 477522, 477523, 477524, 477525,
  477526, 477527, 477528,
];

let pixelIds = [...originalPixelIds];

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
  return pixelIds[Math.floor(Math.random() * pixelIds.length)];
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
    if (error.message.includes("401")) {
      return 401;
    }
    return 500;
  }
}

async function getPixelColor(userData, pixelId) {
  try {
    const response = await httpRequest(
      "GET",
      `https://notpx.app/api/v1/image/get/${pixelId}`,
      null,
      userData
    );
    return response?.pixel;
  } catch (error) {
    if (error.message.includes("401")) {
      return 401;
    }
    return 500;
  }
}

async function getStartRepaint(userData, id) {
  try {
    const response = await httpRequest(
      "POST",
      "https://notpx.app/api/v1/repaint/start",
      {
        pixelId: id,
        newColor: "#000000",
      },
      userData
    );
    return response;
  } catch (error) {
    if (error.message.includes("401")) {
      return 401;
    }
    return 500;
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
    if (error.message.includes("401")) {
      return 401;
    }
    return 500;
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

function reloadIframe() {
  window.location.reload();
}

function observeIframe() {
  return new Promise((resolve, reject) => {
    // Kiểm tra xem iframe đã tồn tại sẵn chưa
    let iframe =
      document.getElementsByTagName("iframe")[0] ||
      document.querySelector("iframe");
    if (iframe) {
      console.log("Iframe đã có sẵn:", iframe);
      resolve(iframe); // Trả về iframe nếu tìm thấy ngay lập tức
    }

    // Tạo observer để theo dõi sự thay đổi trong DOM
    const observer = new MutationObserver(function (mutationsList) {
      const iframes = document.getElementsByTagName("iframe");
      if (iframes.length > 0) {
        console.log("Iframe được tìm thấy:", iframes[0]);
        observer.disconnect(); // Ngừng quan sát sau khi tìm thấy iframe
        resolve(iframes[0]); // Resolve với iframe được tìm thấy
      }
    });

    // Bắt đầu quan sát DOM
    observer.observe(document.body, { childList: true, subtree: true });

    // Đặt timeout để tránh đợi vô hạn nếu iframe không bao giờ xuất hiện
    setTimeout(() => {
      observer.disconnect(); // Ngắt quan sát
      reject(null);
    }, 10000); // Thời gian chờ 30 giây
  });
}

async function gettgWebAppData() {
  try {
    await sleep(10000);
    const lauchButton = document.querySelector(".new-message-bot-commands");

    lauchButton?.dispatchEvent(
      new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
      })
    );
    iframe = await observeIframe();
    if (iframe) {
      return parseUserData(iframe.src || "");
    } else {
      console.log("Không tìm thấy iframe.");
      return null;
    }
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

async function mainLoopPaint(tgWebAppData, userBalance, checkPaint, i) {
  while (true) {
    if (pixelIds.length === 0) {
      console.warn("Mảng pixelIds đã hết phần tử, khôi phục lại từ ban đầu.");
      pixelIds = [...originalPixelIds]; // Khôi phục lại mảng ban đầu
    }
    let pixelId = randomPixelId(); // Lấy ngẫu nhiên pixelId
    let pixel = await getPixelColor(tgWebAppData, pixelId); // Lấy thông tin màu pixel

    if (pixel === 401) {
      reloadIframe();
      return;
    } else if (pixel === 500) {
      await sleep(5000);
      continue;
    }

    console.log(`Màu: ${pixel?.color}, Tọa độ ${pixel?.id}`);

    // Nếu màu là "#000000", xóa pixelId khỏi mảng
    if (pixel?.color === "#000000") {
      const index = pixelIds.indexOf(pixelId);
      if (index > -1) {
        pixelIds.splice(index, 1); // Xóa phần tử khỏi mảng
        console.log(
          `Đã xóa pixelId: ${pixelId} vì màu là #000000.  Mảng pixelIds còn ${pixelIds.length} phần tử`
        );
      }
      await sleep(5000);
      continue; // Chuyển sang pixel tiếp theo
    }

    // Nếu màu không phải là "#000000", khôi phục mảng pixelIds về trạng thái ban đầu
    if (pixel?.color && pixel?.color !== "#000000") {
      console.info(`Số lần tô màu còn lại: ${i}`);

      const result = await getStartRepaint(tgWebAppData, pixel?.id);
      if (result === 401 || result === 500) {
        await sleep(5000);
        continue;
      }

      if (result.balance) {
        console.info(
          `
           - Bạn đã tô màu thành công:
             + Số điểm nhận đc: ${(result.balance - userBalance).toFixed(1)}
             + Số dư hiện tại là: ${result.balance.toFixed(1)}
          `
        );
        userBalance = result.balance;
        checkPaint = true; // Đặt cờ thành true vì có pixel được sơn màu
        pixelIds = [...originalPixelIds]; // Khôi phục lại mảng ban đầu
        console.log("Mảng pixelIds đã được khôi phục lại ban đầu.");
        break; // Ngừng vòng lặp nếu đã sơn màu thành công
      }
    }
    checkPaint = false;
    await sleep(5000);
  }
}

async function processPaint() {
  console.log(
    "~~~~~~~~~~~~~~~~~~~~~~~~Bắt đầu tô màu nhé ~~~~~~~~~~~~~~~~~~~~~~"
  );
  let tgWebAppData = await gettgWebAppData();
  let retryCount = 0;
  while (true) {
    if (!tgWebAppData) {
      tgWebAppData = await gettgWebAppData();
      continue;
    }

    let statusInfo = await getStatusUser(tgWebAppData);
    if (statusInfo === 401) {
      reloadIframe();
      return;
    } else if (statusInfo === 500) {
      retryCount++;
      console.log("Không tìm thấy user. Retry lần: ", retryCount);
      continue;
    }

    let userBalance = statusInfo.userBalance;
    for (let i = statusInfo.charges; i > 0; i--) {
      let checkPaint = false; // Cờ để kiểm tra xem có pixel nào được sơn màu không

      await mainLoopPaint(tgWebAppData, userBalance, checkPaint, i);

      if (!checkPaint) {
        i++; // Không giảm i nếu không pixel nào thỏa điều kiện
      }

      if (i !== 1 && checkPaint) {
        await sleep(2000); // Nghỉ 2 giây giữa các lần tô màu
      }
    }

    statusInfo = await getStatusUser(tgWebAppData);

    if (statusInfo === 401) {
      reloadIframe();
      return;
    } else if (statusInfo === 500) {
      retryCount++;
      console.log("Không tìm thấy user. Retry lần: ", retryCount);
      continue;
    }

    await sleep(statusInfo.reChargeTimer);
    if (retryCount >= 10) {
      reloadIframe();
    }
  }
}

async function handleClaimPX() {
  let tgWebAppData = await gettgWebAppData();
  if (!tgWebAppData) return null;

  console.log("Dữ liệu lấy được:", tgWebAppData);
  const claim = await claimPX(tgWebAppData);
  if (claim === 401) {
    reloadIframe();
    return;
  } else if (claim === 500) {
    console.info(`Lỗi claim.`);
    return;
  } else {
    console.info(`Claim $PX thành công: ${claim.claimed}`);
  }
}

// Thay thế setInterval bằng setTimeout để tự động điều chỉnh thời gian chờ
function scheduleClaimPX() {
  setTimeout(async () => {
    await handleClaimPX();
    scheduleClaimPX(); // Gọi lại để tiếp tục lặp
  }, 1000 * 65); // Lặp lại sau mỗi 65 giây
}

processPaint();
scheduleClaimPX();
