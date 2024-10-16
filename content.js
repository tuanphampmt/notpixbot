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

const rootColor = "#2450A4";
const originalPixelIds = [
  generateArray(471513, 511513, 1000, []),
  generateArray(472512, 511512, 1000, []),
  generateArray(472511, 512511, 1000, []),
  generateArray(473510, 512510, 1000, []),
  generateArray(473509, 513509, 1000, []),
  generateArray(474508, 513508, 1000, []),
  generateArray(475507, 514507, 1000, []),
  generateArray(475506, 514506, 1000, []),
  generateArray(475505, 515505, 1000, []),
  generateArray(476504, 515504, 1000, []),
  generateArray(476503, 516503, 1000, []),
  generateArray(477502, 516502, 1000, []),
  generateArray(477501, 517501, 1000, []),
  generateArray(478500, 517500, 1000, []),
  generateArray(478499, 518499, 1000, []),
  generateArray(479498, 518498, 1000, [501498]),
  generateArray(479497, 519497, 1000, [501497]),
  generateArray(480496, 519496, 1000, [500496, 501496, 502496]),
  generateArray(480495, 520495, 1000, [500495, 501495, 502495]),
  generateArray(481494, 520494, 1000, [499494, 500494, 501494, 502494, 503494]),
  generateArray(481493, 521493, 1000, [499493, 500493, 501493, 502493, 503493]),
  generateArray(
    482492,
    521492,
    1000,
    [498492, 499492, 500492, 501492, 502492, 503492, 504492]
  ),
  generateArray(
    482491,
    522491,
    1000,
    [498491, 499491, 500491, 501491, 502491, 503491, 504491]
  ),
  generateArray(
    483490,
    522490,
    1000,
    [497490, 498490, 499490, 500490, 501490, 502490, 503490, 504490, 505490]
  ),
  generateArray(
    483489,
    522489,
    1000,
    [497489, 498489, 499489, 500489, 501489, 502489, 503489, 504489, 505489]
  ),
  generateArray(
    484488,
    521488,
    1000,
    [
      496488, 497488, 498488, 499488, 500488, 501488, 502488, 503488, 504488,
      505488, 506488,
    ]
  ),
  generateArray(
    484487,
    521487,
    1000,
    [
      496487, 497487, 498487, 499487, 500487, 501487, 502487, 503487, 504487,
      505487, 506487,
    ]
  ),
  generateArray(
    485486,
    520486,
    1000,
    [
      495486, 496486, 497486, 498486, 499486, 500486, 501486, 502486, 503486,
      504486, 505486, 506486, 507486,
    ]
  ),
  generateArray(
    485485,
    520485,
    1000,
    [
      495485, 496485, 497485, 498485, 499485, 500485, 501485, 502485, 503485,
      504485, 505485, 506485, 507485,
    ]
  ),
  generateArray(
    486484,
    519484,
    1000,
    [
      494484, 495484, 496484, 497484, 498484, 499484, 500484, 501484, 502484,
      503484, 504484, 505484, 506484, 507484, 508484,
    ]
  ),
  generateArray(
    486483,
    519483,
    1000,
    [
      494483, 495483, 496483, 497483, 498483, 499483, 500483, 501483, 502483,
      503483, 504483, 505483, 506483, 507483, 508483,
    ]
  ),
  generateArray(487482, 492482, 1000, []),
  generateArray(510482, 518482, 1000, []),
  generateArray(487481, 492481, 1000, []),
  generateArray(510481, 518481, 1000, []),
  generateArray(488480, 491480, 1000, []),
  generateArray(511480, 517480, 1000, []),
  generateArray(488479, 491479, 1000, []),
  generateArray(511479, 517479, 1000, []),
  generateArray(489478, 490478, 1000, []),
  generateArray(512478, 516478, 1000, []),
  generateArray(489477, 490477, 1000, []),
  generateArray(512477, 516477, 1000, []),
  generateArray(513476, 515476, 1000, []),
  generateArray(513475, 515475, 1000, []),
].flat();

// const originalPixelIds = [
//   generateArray(30240, 157240, 1000, [86240]),
//   generateArray(30239, 157239, 1000, [85239, 86239, 87239]),
//   generateArray(
//     30238,
//     157238,
//     1000,
//     [82238, 83238, 84238, 85238, 86238, 87238, 88238, 89238, 80238]
//   ),
//   generateArray(30237, 157237, 1000, [85237, 86237, 87237]),
//   generateArray(30236, 157236, 1000, [86236]),
//   generateArray(30235, 157235, 1000, [86235]),
//   generateArray(30234, 157234, 1000, [86234, 108234, 109234, 110234]),
//   generateArray(30233, 157233, 1000, [108233, 109233, 110233]),
//   generateArray(30232, 157232, 1000, [108232, 109232, 110232]),
//   generateArray(30231, 157231, 1000, []),
//   generateArray(30229, 157229, 1000, []),
//   generateArray(30228, 157228, 1000, [118228, 125228, 147228, 149228]),
//   generateArray(30227, 157227, 1000, [119227, 124227, 148228]),
//   generateArray(30226, 157226, 1000, [120226, 121226, 122226, 147226, 149226]),
//   generateArray(30225, 157225, 1000, [120225, 121225, 122225]),
//   generateArray(30224, 157224, 1000, [120224, 121224, 122224]),
//   generateArray(30223, 157223, 1000, [120223, 121223, 122223]),
//   generateArray(30222, 157222, 1000, [119222, 124222, 46222]),
//   generateArray(30221, 157221, 1000, [118221, 125221, 46221, 105221]),
//   generateArray(30220, 157220, 1000, [46220, 105220]),
//   generateArray(
//     30219,
//     157219,
//     1000,
//     [43219, 44219, 45219, 46219, 47219, 48219, 49219, 105221]
//   ),
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
      logInfo("Iframe đã có sẵn: ", iframe);
      resolve(iframe); // Trả về iframe nếu tìm thấy ngay lập tức
    }

    // Tạo observer để theo dõi sự thay đổi trong DOM
    const observer = new MutationObserver(function (mutationsList) {
      const iframes = document.getElementsByTagName("iframe");
      if (iframes.length > 0) {
        logInfo("Iframe được tìm thấy:", iframes[0]);
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

async function handleClaimPX() {
  let tgWebAppData = await gettgWebAppData();
  if (!tgWebAppData) return null;

  logInfo("Dữ liệu lấy được:", tgWebAppData);
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

// // Thay thế setInterval bằng setTimeout để tự động điều chỉnh thời gian chờ
function scheduleClaimPX() {
  setTimeout(async () => {
    await handleClaimPX();
    scheduleClaimPX(); // Gọi lại để tiếp tục lặp
  }, 1000 * 60 * 2); // Lặp lại sau mỗi 2 phut
}

// setInterval(function () {
//   reloadIframe();
// }, 1000 * 60 * 10);

handleClaimPX();
scheduleClaimPX();
processPaint();
