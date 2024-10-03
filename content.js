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

const pixelIds = [
  372611, 373611, 374611, 375611, 376611, 377611, 378611, 379611, 380611,
  381611, 382611, 383611, 384611, 385611, 386611, 387611, 388611, 389611,
  390611, 391611, 392611, 393611, 394611, 395611, 396611, 397611, 398611,
  399611, 400611, 401611, 402611, 403611, 404611, 405611, 406611, 407611,
  408611, 409611, 410611, 411611, 412611, 413611, 414611, 415611, 416611,
  417611, 418611, 419611, 420611, 421611, 422611, 423611, 424611, 425611,
  426611, 427611, 428611, 429611, 430611, 431611, 432611, 433611, 434611,
  435611, 436611, 437611, 438611, 439611, 440611, 441611, 442611, 443611,
  444611, 445611, 446611, 447611, 448611, 449611, 450611, 451611, 452611,
  453611, 454611, 455611, 456611, 457611, 458611, 459611, 460611, 461611,
  462611, 463611, 464611, 465611, 466611, 467611, 468611, 469611, 470611,
  471611, 472611, 473611, 474611, 475611, 476611, 477611, 478611, 479611,
  480611, 481611, 482611, 483611, 484611, 485611, 486611, 487611, 488611,
  489611, 490611, 491611, 492611, 493611, 494611, 495611, 496611, 497611,
  498611, 499611, 500611, 501611, 502611, 503611, 504611, 505611, 506611,
  507611, 508611, 509611, 510611, 511611, 512611, 513611, 514611, 515611,
  516611, 517611, 518611, 519611, 520611, 521611, 522611, 523611, 524611,
  525611, 526611, 527611, 528611, 529611, 530611, 531611, 532611, 533611,
  534611, 535611, 536611, 537611, 538611, 539611, 540611, 541611, 542611,
  543611, 544611, 545611, 546611, 547611, 548611, 549611, 550611, 551611,
  552611, 553611, 554611, 555611, 556611, 557611, 558611, 559611, 560611,
  561611, 562611, 563611, 564611, 565611, 566611, 567611, 568611, 569611,
  570611, 571611, 572611, 573611, 574611, 575611, 576611, 577611, 578611,
  579611, 580611, 581611, 582611, 583611, 584611, 585611, 586611, 587611,
  588611, 589611, 590611, 591611, 592611, 593611, 594611, 595611, 596611,
  597611, 598611, 599611, 600611, 601611, 602611, 603611, 604611, 605611,
  606611, 607611, 608611, 609611, 610611, 611611, 612611, 613611, 614611,
  615611, 616611, 617611, 618611, 619611, 620611, 621611, 622611, 623611,
  624611, 625611, 626611, 627611, 628611,
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
    return null;
  }
}

async function getStartRepaint(userData, id) {
  await sleep(2000);
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

async function processPaint() {
  console.log("Bắt đầu tô màu.");
  let tgWebAppData = await gettgWebAppData();

  while (true) {
    if (!tgWebAppData) {
      tgWebAppData = await gettgWebAppData();
      continue;
    }

    let statusInfo = await getStatusUser(tgWebAppData);
    if (!statusInfo) {
      reloadIframe();
    }
    let userBalance = statusInfo.userBalance;
    for (let i = statusInfo.charges; i > 0; i--) {
      let checkPaint = false; // Cờ để kiểm tra xem có pixel nào được sơn màu không

      for (let j = 0; j < pixelIds.length; j++) {
        const pixel = await getPixelColor(tgWebAppData, pixelIds[j]);

        if (pixel?.color && pixel?.color !== "#000000") {
          console.info(`Số lần tô màu còn lại: ${i}`);

          const result = await getStartRepaint(tgWebAppData, pixel?.id);

          if (result && result.balance) {
            console.info(
              `
               - Bạn đã tô màu thành công:
                 + Số điểm nhận đc: ${result.balance - userBalance}. 
                 + Số dư hiện tại là: ${result.balance}
              `
            );
            userBalance = result.balance;
            checkPaint = true; // Đặt cờ thành true vì có pixel được sơn màu
            break; // Ngừng vòng lặp nếu đã sơn màu thành công
          }
        }
      }

      if (!checkPaint) {
        i++; // Không giảm i nếu không pixel nào thỏa điều kiện
      }

      if (i !== 1 && checkPaint) {
        await sleep(2000); // Nghỉ 2 giây giữa các lần tô màu
      }
    }

    statusInfo = await getStatusUser(tgWebAppData);
    if (!statusInfo) {
      reloadIframe();
    }

    await sleep(statusInfo.reChargeTimer);
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
    return;
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
