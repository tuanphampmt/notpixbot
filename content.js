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
  491486, 491487, 491488, 491489, 491490, 491491, 491492, 491493, 491494,
  491495, 491496, 491497, 491498, 491499, 491500, 491501, 491502, 491503,
  491504, 491505, 491506, 491507, 492486, 492487, 492488, 492489, 492490,
  492491, 492492, 492493, 492494, 492495, 492496, 492497, 492498, 492499,
  492500, 492501, 492502, 492503, 492504, 492505, 492506, 493486, 493487,
  493488, 493489, 493490, 493491, 493492, 493493, 493494, 493495, 493496,
  493497, 493498, 493499, 493500, 493501, 493502, 493503, 493504, 493505,
  493506, 493507, 494486, 494487, 494488, 494489, 494490, 494491, 494492,
  494493, 494494, 494495, 494496, 494497, 494498, 494499, 494500, 494501,
  494502, 494503, 494504, 494505, 494506, 494507, 495486, 495487, 495488,
  495489, 495490, 495491, 495492, 495493, 495494, 495495, 495496, 495497,
  495498, 495499, 495500, 495501, 495502, 495503, 495504, 495505, 495506,
  495507, 496486, 496487, 496488, 496489, 496490, 496491, 496492, 496493,
  496494, 496495, 496496, 496497, 496498, 496499, 496500, 496501, 496502,
  496503, 496504, 496505, 496506, 496507, 497486, 497487, 497488, 497489,
  497490, 497491, 497492, 497493, 497494, 497495, 497496, 497497, 497498,
  497499, 497500, 497501, 497502, 497503, 497504, 497505, 497506, 497507,
  498486, 498487, 498488, 498489, 498490, 498491, 498492, 498493, 498494,
  498495, 498496, 498497, 498498, 498499, 498500, 498501, 498502, 498503,
  498504, 498505, 498506, 499486, 499487, 499488, 499489, 499490, 499491,
  499492, 499493, 499494, 499495, 499496, 499497, 499498, 499499, 499500,
  499501, 499502, 499503, 499504, 499505, 499506, 499507, 500486, 500487,
  500488, 500489, 500490, 500491, 500492, 500493, 500494, 500495, 500496,
  500497, 500498, 500499, 500500, 500501, 500502, 500503, 500504, 500505,
  500506, 500507, 501486, 501487, 501488, 501489, 501490, 501491, 501492,
  501493, 501494, 501495, 501496, 501497, 501498, 501499, 501500, 501501,
  501502, 501503, 501504, 501505, 501506, 501507, 502486, 502487, 502488,
  502489, 502490, 502491, 502492, 502493, 502494, 502495, 502496, 502497,
  502498, 502499, 502500, 502501, 502502, 502503, 502504, 502505, 502506,
  502507, 503486, 503487, 503488, 503489, 503490, 503491, 503492, 503493,
  503494, 503495, 503496, 503497, 503498, 503499, 503500, 503501, 503502,
  503503, 503504, 503505, 503506, 503507,
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

async function mainLoopPaint(
  tgWebAppData,
  userBalance,
  checkPaint,
  i,
  repaintsTotal
) {
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
          `Đã xóa pixelId: ${pixelId} vì màu là #000000. Mảng pixelIds còn ${pixelIds.length} phần tử`
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
             + Tổng số lần tô màu: ${repaintsTotal + 1}
             + Số điểm nhận đc: ${(result.balance - userBalance).toFixed(1)}
             + Số dư hiện tại là: ${result.balance.toFixed(1)}
          `
        );
        userBalance = result.balance;
        checkPaint = true; // Đặt cờ thành true vì có pixel được sơn màu
        pixelIds = [...originalPixelIds]; // Khôi phục lại mảng ban đầu
        console.log("Mảng pixelIds đã được khôi phục lại ban đầu.");
        return { userBalance, checkPaint };
      }
    }
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

      const resultLoop = await mainLoopPaint(
        tgWebAppData,
        userBalance,
        checkPaint,
        i,
        statusInfo?.repaintsTotal
      );

      userBalance = resultLoop.userBalance;
      checkPaint = resultLoop.checkPaint;

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
  }, 1000 * 60 * 5); // Lặp lại sau mỗi 5 phut
}

processPaint();
scheduleClaimPX();
