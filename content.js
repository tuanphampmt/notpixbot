const waitTime = 10000;

function generateArray(start, end, step, excludeArray) {
  // Tạo mảng với các giá trị từ start đến end với bước nhảy step
  let resultArray = Array.from(
    { length: Math.floor((end - start) / step) + 1 },
    (v, i) => start + i * step
  );

  // Loại bỏ các phần tử có trong mảng excludeArray
  resultArray = resultArray.filter((value) => !excludeArray.includes(value));

  return resultArray;
}

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

const rootColor = "#3690EA";

const originalPixelIds = [
  generateArray(1, 32001, 1000, []),
  generateArray(2, 32002, 1000, []),
  generateArray(3, 32003, 1000, []),
  generateArray(4, 32004, 1000, []),
  generateArray(5, 32005, 1000, []),
  generateArray(6, 32006, 1000, []),
  generateArray(7, 32007, 1000, []),
  generateArray(8, 32008, 1000, []),
  generateArray(9, 32009, 1000, []),
  generateArray(10, 32010, 1000, []),
  generateArray(11, 32011, 1000, []),
  generateArray(12, 32012, 1000, []),
  generateArray(13, 31013, 1000, []),
  generateArray(14, 31014, 1000, []),
  generateArray(15, 30015, 1000, []),
  generateArray(16, 30015, 1000, []),
  generateArray(17, 29017, 1000, []),
  generateArray(18, 29018, 1000, []),
  generateArray(19, 28019, 1000, []),
  generateArray(20, 28020, 1000, []),
  generateArray(21, 28021, 1000, []),
  generateArray(22, 27022, 1000, []),
  generateArray(23, 27023, 1000, []),
  generateArray(24, 26024, 1000, []),
  generateArray(25, 26025, 1000, []),
  generateArray(26, 25026, 1000, []),
  generateArray(27, 25027, 1000, []),
  generateArray(28, 25028, 1000, []),
  generateArray(29, 24029, 1000, []),
  generateArray(30, 24030, 1000, []),
].flat();

// const originalPixelIds = [
//   generateArray(290204, 351204, 1000, []),
//   generateArray(290205, 351205, 1000, []),
//   generateArray(290206, 351206, 1000, []),
//   generateArray(290207, 351207, 1000, []),
//   generateArray(290208, 351208, 1000, []),
//   generateArray(290209, 351209, 1000, []),
//   generateArray(290210, 351210, 1000, []),
//   generateArray(290211, 351211, 1000, []),
//   generateArray(290212, 351212, 1000, []),
//   generateArray(290213, 351213, 1000, []),
//   generateArray(290214, 351214, 1000, []),
//   generateArray(290215, 320215, 1000, []),
//   generateArray(290216, 320216, 1000, []),
//   generateArray(290217, 319217, 1000, []),
//   generateArray(290218, 319218, 1000, []),
//   generateArray(290219, 318219, 1000, []),
//   generateArray(290220, 318220, 1000, []),
//   generateArray(290221, 317221, 1000, []),
//   generateArray(290222, 317222, 1000, []),
//   generateArray(290223, 317223, 1000, []),
//   generateArray(290224, 316224, 1000, []),
//   generateArray(290225, 316225, 1000, []),
//   generateArray(290226, 315226, 1000, []),
//   generateArray(290227, 315227, 1000, []),
//   generateArray(290228, 314228, 1000, []),
//   generateArray(290229, 314229, 1000, []),
//   generateArray(290230, 314230, 1000, []),
// ].flat();
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
    origin: "https://app.notpx.app",
    referer: "https://app.notpx.app/",
    "user-agent": getRandomUserAgent(),
    "Content-Type": "application/json",
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
    logError(errorMessage);
    throw new Error(errorMessage);
  }

  // Trả về dữ liệu dưới dạng JSON
  const result = await response.json();
  return result;
}

function sleep(ms) {
  // Chờ thời gian reCharge trước khi lặp lại chu kỳ
  logInfo(`Bạn phải chờ ${ms / 1000} giây để tiếp tục`);
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

    if (error.message.includes("400")) {
      return 400;
    }
    return 500;
  }
}

async function special(userData) {
  try {
    const response = await httpRequest(
      "POST",
      "https://notpx.app/api/v1/repaint/special",
      {
        pixelId: 511393,
        type: 7,
      },
      userData
    );
    return response;
  } catch (error) {
    if (error.message.includes("401")) {
      return 401;
    }

    if (error.message.includes("400")) {
      return 400;
    }
    return 500;
  }
}

async function reChargeSpeed(userData) {
  try {
    const response = await httpRequest(
      "GET",
      "https://notpx.app/api/v1/mining/boost/check/reChargeSpeed",
      null,
      userData
    );
    return response;
  } catch (error) {
    if (error.message.includes("401")) {
      return 401;
    }

    if (error.message.includes("400")) {
      return 400;
    }
    return 500;
  }
}

async function startTask(userData, suburl) {
  try {
    const response = await httpRequest(
      "GET",
      `https://notpx.app/api/v1/mining/task/check/${suburl}`,
      null,
      userData
    );
    return response;
  } catch (error) {
    if (error.message.includes("401")) {
      return 401;
    }

    if (error.message.includes("400")) {
      return 400;
    }
    return 500;
  }
}

async function energyLimit(userData) {
  try {
    const response = await httpRequest(
      "GET",
      "https://notpx.app/api/v1/mining/boost/check/energyLimit",
      null,
      userData
    );
    return response;
  } catch (error) {
    if (error.message.includes("401")) {
      return 401;
    }

    if (error.message.includes("400")) {
      return 400;
    }
    return 500;
  }
}

async function paintReward(userData) {
  try {
    const response = await httpRequest(
      "GET",
      "https://notpx.app/api/v1/mining/boost/check/paintReward",
      null,
      userData
    );
    return response;
  } catch (error) {
    if (error.message.includes("401")) {
      return 401;
    }

    if (error.message.includes("400")) {
      return 400;
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

    if (error.message.includes("400")) {
      return 400;
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
        newColor: rootColor,
      },
      userData
    );
    return response;
  } catch (error) {
    if (error.message.includes("401")) {
      return 401;
    }

    if (error.message.includes("400")) {
      return 400;
    }
    return 500;
  }
}

async function subscribeTemplate(userData) {
  try {
    const response = await httpRequest(
      "PUT",
      "https://notpx.app/api/v1/image/template/subscribe/1502904019",
      null,
      userData
    );
    return response;
  } catch (error) {
    if (error.message.includes("401")) {
      return 401;
    }

    if (error.message.includes("400")) {
      return 400;
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

    if (error.message.includes("400")) {
      return 400;
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
      // logInfo("Iframe đã có sẵn: ", iframe);
      resolve(iframe); // Trả về iframe nếu tìm thấy ngay lập tức
    }

    // Tạo observer để theo dõi sự thay đổi trong DOM
    const observer = new MutationObserver(function (mutationsList) {
      const iframes = document.getElementsByTagName("iframe");
      if (iframes.length > 0) {
        // logInfo("Iframe được tìm thấy:", iframes[0]);
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
    await sleep(5000);
    const lauchButton2 = document.querySelector(
      "button.popup-button.btn.primary.rp"
    );
    if (lauchButton2) {
      lauchButton2?.dispatchEvent(
        new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
        })
      );
    }

    iframe = await observeIframe();
    if (iframe) {
      logInfo("Dữ liệu lấy được:", parseUserData(iframe.src || ""));
      return parseUserData(iframe.src || "");
    } else {
      logError("Không tìm thấy iframe.");
      return null;
    }
  } catch (error) {
    logError("Error:", error);
    return null;
  }
}

function logInfo(message, value) {
  console.log(`%c${message}`, "color: green; font-size: 17px;", value || "");
}

function logError(message, value) {
  console.log(`%c${message}`, "color: red; font-size: 17px;", value || "");
}

function logWarning(message, value) {
  console.log(`%c${message}`, "color: blue; font-size: 17px;", value || "");
}

async function mainLoopPaint(
  tgWebAppData,
  userBalance,
  checkPaint,
  i,
  repaintsTotal,
  charges
) {
  if (pixelIds.length === 0) {
    logWarning("Mảng pixelIds đã hết phần tử, khôi phục lại từ ban đầu.");
    pixelIds = [...originalPixelIds]; // Khôi phục lại mảng ban đầu
  }
  let pixelId = randomPixelId(); // Lấy ngẫu nhiên pixelId
  let pixel = await getPixelColor(tgWebAppData, pixelId); // Lấy thông tin màu pixel

  if (pixel === 401 || pixel === 400) {
    reloadIframe();
    return;
  } else if (pixel === 500) {
    checkPaint = false;
    return { userBalance, checkPaint };
  }

  logInfo(`Màu: ${pixel?.color}, Tọa độ ${pixel?.id}`);

  // Nếu màu là "#000000", xóa pixelId khỏi mảng
  if (pixel?.color === rootColor) {
    const index = pixelIds.indexOf(pixelId);
    if (index > -1) {
      pixelIds.splice(index, 1); // Xóa phần tử khỏi mảng
      logWarning(
        `Đã xóa pixelId: ${pixelId} vì không phải màu ${rootColor}. Mảng pixelIds còn ${pixelIds.length} phần tử`
      );
    }
    checkPaint = false;
    return { userBalance, checkPaint };
  }

  // Nếu màu không phải là "#000000", khôi phục mảng pixelIds về trạng thái ban đầu
  if (pixel?.color && pixel?.color !== rootColor) {
    const result = await getStartRepaint(tgWebAppData, pixel?.id);

    if (result === 401) {
      reloadIframe();
      return;
    } else if (result === 400) {
      checkPaint = false;
      let statusInfo = await getStatusUser(tgWebAppData);
      charges = statusInfo.charges;
      return { userBalance, checkPaint, charges };
    } else if (result === 500) {
      checkPaint = false;
      return { userBalance, checkPaint };
    }

    if (result.balance) {
      const rewards = (result.balance - userBalance).toFixed(1);
      logInfo(
        `
           - Bạn đã tô màu thành công:
             + Số lần tô màu còn lại: ${i - 1}
             + Tổng số lần bạn đã tô màu: ${repaintsTotal + 1}
             + Số điểm nhận đc: ${rewards}
             + Số dư hiện tại là: ${result.balance.toFixed(1)}
          `
      );

      userBalance = result.balance;
      checkPaint = true; // Đặt cờ thành true vì có pixel được sơn màu
      pixelIds = [...originalPixelIds]; // Khôi phục lại mảng ban đầu
      logInfo("Mảng pixelIds đã được khôi phục lại ban đầu.");
      return { userBalance, checkPaint };
    }
    checkPaint = false;
    return { userBalance, checkPaint };
  }
  return { userBalance, checkPaint };
}

async function processPaint() {
  logInfo("######## Bắt đầu tô màu nhé ##########");

  let tgWebAppData = await gettgWebAppData();
  let retryCount = 0;

  await subscribeTemplate(tgWebAppData);

  await sleep(3000);
  while (true) {
    if (!tgWebAppData) {
      tgWebAppData = await gettgWebAppData();
      continue;
    }

    let statusInfo = await getStatusUser(tgWebAppData);
    if (statusInfo === 401 || statusInfo === 400) {
      reloadIframe();
      return;
    } else if (statusInfo === 500) {
      retryCount++;
      logError("Không tìm thấy user. Retry lần: ", retryCount);
      if (retryCount > 5) {
        reloadIframe();
      }
      await sleep(5000);
      continue;
    }

    let userBalance = statusInfo.userBalance;
    logInfo(`Tổng số lần tô màu của bạn là: ${statusInfo.charges}`);
    let charges = statusInfo.charges;
    for (let i = charges; i > 0; i--) {
      let checkPaint = false; // Cờ để kiểm tra xem có pixel nào được sơn màu không

      const resultLoop = await mainLoopPaint(
        tgWebAppData,
        userBalance,
        checkPaint,
        i,
        statusInfo?.repaintsTotal,
        charges
      );

      userBalance = resultLoop.userBalance;
      checkPaint = resultLoop.checkPaint;
      if (resultLoop.charges) {
        logWarning(
          `Lấy lại thông tin user, khi đó tổng số lần tô màu mới nhất là: ${resultLoop.charges}`
        );
        charges = resultLoop.charges;
      }

      if (!checkPaint) {
        i++; // Không giảm i nếu không pixel nào thỏa điều kiện
      }

      if (i !== 1 || checkPaint) {
        await sleep(2000); // Nghỉ 2 giây giữa các lần tô màu
      }
    }

    statusInfo = await getStatusUser(tgWebAppData);

    if (statusInfo === 401 || statusInfo === 400) {
      reloadIframe();
      return;
    } else if (statusInfo === 500) {
      retryCount++;
      logError("Không tìm thấy user. Retry lần: ", retryCount);
      if (retryCount > 5) {
        reloadIframe();
      }
      await sleep(5000);
      continue;
    }

    if (statusInfo.charges === 0) {
      await sleep(statusInfo.reChargeTimer);
    }

    if (retryCount > 5) {
      reloadIframe();
    }
  }
}

async function processPaintSpecial() {
  logInfo("######## Bắt đầu tô màu halloween nhé ##########");

  let tgWebAppData = await gettgWebAppData();
  let retryCount = 0;
  await sleep(5000);
  while (true) {
    if (!tgWebAppData) {
      tgWebAppData = await gettgWebAppData();
      continue;
    }

    let statusInfo = await getStatusUser(tgWebAppData);
    if (statusInfo === 401 || statusInfo === 400) {
      reloadIframe();
      return;
    } else if (statusInfo === 500) {
      retryCount++;
      logError("Không tìm thấy user. Retry lần: ", retryCount);
      if (retryCount > 5) {
        reloadIframe();
      }
      await sleep(5000);
      continue;
    }

    let charges =
      Object.keys(statusInfo.goods) === 0 ? 0 : statusInfo.goods["7"] || 0;

    logInfo(`Tổng số lần tô màu halloween của bạn là: ${charges}`);

    for (let i = charges; i > 0; i--) {
      const resultSpecial = await special(tgWebAppData);
      if (resultSpecial === 401 || resultSpecial === 400) {
        reloadIframe();
        return;
      } else if (resultSpecial === 500) {
        break;
      }

      if (resultSpecial) {
        logInfo(`Bạn đã tô màu halloween thành công`);
      }
      await sleep(2000);
    }

    statusInfo = await getStatusUser(tgWebAppData);

    if (statusInfo === 401 || statusInfo === 400) {
      reloadIframe();
      return;
    } else if (statusInfo === 500) {
      retryCount++;
      logError("Không tìm thấy user. Retry lần: ", retryCount);
      if (retryCount > 5) {
        reloadIframe();
      }
      await sleep(5000);
      continue;
    }

    charges =
      Object.keys(statusInfo.goods) === 0 ? 0 : statusInfo.goods["7"] || 0;
    if (charges === 0) {
      break;
    }

    if (retryCount > 5) {
      reloadIframe();
    }
  }
}

async function handleClaimPX() {
  let tgWebAppData = await gettgWebAppData();
  if (!tgWebAppData) return null;

  const claim = await claimPX(tgWebAppData);
  if (claim === 401 || claim === 400) {
    reloadIframe();
    return;
  } else if (claim === 500) {
    logError(`Lỗi claim.`);
    return;
  } else {
    logInfo(`Claim $PX thành công: ${claim.claimed}`);
  }
}

async function handleReChargeSpeed() {
  let tgWebAppData = await gettgWebAppData();

  if (!tgWebAppData) return null;

  let statusInfo = await getStatusUser(tgWebAppData);
  if (statusInfo === 401 || statusInfo === 400 || statusInfo === 500) {
    return;
  }

  if (statusInfo && statusInfo?.boosts?.reChargeSpeed === 11) {
    logInfo(`ReChargeSpeed đạt max level 11`);
    return;
  }

  for (let i = 0; i < 10; i++) {
    const speed = await reChargeSpeed(tgWebAppData);
    if (speed === 401 || speed === 400 || speed === 500) {
      break;
    } else if (speed.reChargeSpeed) {
      logInfo(`ReChargeSpeed thành công`);
      await sleep(10000);
    }
  }
}

async function handleEnergyLimit() {
  let tgWebAppData = await gettgWebAppData();
  if (!tgWebAppData) return null;

  let statusInfo = await getStatusUser(tgWebAppData);

  if (statusInfo === 401 || statusInfo === 400 || statusInfo === 500) {
    return;
  }
  if (statusInfo && statusInfo?.boosts?.energyLimit === 7) {
    logInfo(`Energy limit max level 7`);
    return;
  }

  for (let i = 0; i < 10; i++) {
    const limit = await energyLimit(tgWebAppData);
    if (limit === 401 || limit === 400 || limit === 500) {
      break;
    } else if (limit.energyLimit) {
      logInfo(`EnergyLimit thành công`);
      await sleep(10000);
    }
  }
}

async function handlePaintReward() {
  let tgWebAppData = await gettgWebAppData();
  if (!tgWebAppData) return null;

  let statusInfo = await getStatusUser(tgWebAppData);

  if (statusInfo === 401 || statusInfo === 400 || statusInfo === 500) {
    return;
  }
  if (statusInfo && statusInfo?.boosts?.paintReward > 4) {
    logInfo(`PaintReward đã đạt level ${statusInfo?.boosts?.paintReward}`);
    return;
  }

  for (let i = 0; i < 10; i++) {
    const reward = await paintReward(tgWebAppData);
    if (reward === 401 || reward === 400 || reward === 500) {
      break;
    } else if (reward.paintReward) {
      logInfo(`PaintReward thành công`);
      let statusInfo = await getStatusUser(tgWebAppData);

      if (statusInfo === 401 || statusInfo === 400 || statusInfo === 500) {
        break;
      }
      if (statusInfo && statusInfo?.boosts?.paintReward > 4) {
        logInfo(`PaintReward đã đạt level ${statusInfo?.boosts?.paintReward}`);
        break;
      }
      await sleep(10000);
    }
  }
}

async function handleTask(key, tgWebAppData, specialTaskMap) {
  let start_task = await startTask(tgWebAppData, key);
  if (
    start_task[key] ||
    (specialTaskMap[key] && start_task[specialTaskMap[key]])
  ) {
    logInfo(`Hoàn thành task ${key}`);
    await sleep(5000);
  }
}

async function handleTasks() {
  logInfo(`Bắt đầu làm nhiệm vụ...`);
  let tgWebAppData = await gettgWebAppData();
  if (!tgWebAppData) return null;

  let statusInfo = await getStatusUser(tgWebAppData);

  if (statusInfo === 401 || statusInfo === 400 || statusInfo === 500) {
    return;
  }
  let tasks = [
    "pumpkin",
    "boinkTask",
    "jettonTask",
    "joinSquad",
    "leagueBonusGold",
    "leagueBonusPlatinum",
    "leagueBonusSilver",
    "makePixelAvatar",
    "paint20pixels",
    "x?name=notpixel",
    "x?name=notcoin",
  ];

  const specialTasks = ["x?name=notpixel", "x?name=notcoin"];
  const specialTaskMap = {
    "x?name=notpixel": "x:notpixel",
    "x?name=notcoin": "x:notcoin",
  };

  for (const key of tasks) {
    if (!statusInfo.tasks[key]) {
      await handleTask(key, tgWebAppData, specialTaskMap);
    } else if (specialTasks.includes(key)) {
      let mappedKey = specialTaskMap[key];
      if (!statusInfo.tasks[mappedKey]) {
        await handleTask(key, tgWebAppData, specialTaskMap);
      }
    }
  }
}

// // Thay thế setInterval bằng setTimeout để tự động điều chỉnh thời gian chờ
function scheduleClaimPX() {
  setTimeout(async () => {
    await handleClaimPX();
    scheduleClaimPX(); // Gọi lại để tiếp tục lặp
  }, 1000 * 60 * 2); // Lặp lại sau mỗi 2 phut
}

let count = 0;
const maxCount = 1;

const intervalId = setInterval(async () => {
  count++;
  logInfo(`Đây là lần gọi thứ ${count} để buff boots`);

  await handleEnergyLimit();
  await handleReChargeSpeed();
  await handlePaintReward();

  if (count >= maxCount) {
    clearInterval(intervalId);
    logInfo("Đã hoàn thành 5 lần gọi để buff boots.");
  }
}, 1000 * 60 * 2); // 2 phút

// processPaintSpecial();
handleTasks();
handleEnergyLimit();
handleReChargeSpeed();
handlePaintReward();
handleClaimPX();
scheduleClaimPX();
processPaint();
