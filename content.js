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

const rootColor = "#000000";
// const originalPixelIds = [
//   [
//     472513, 473513, 474513, 475513, 476513, 477513, 478513, 479513, 480513,
//     481513, 482513, 483513, 484513, 485513, 486513, 487513, 488513, 489513,
//     490513, 491513, 492513, 493513, 494513, 495513, 496513, 497513, 498513,
//     499513, 500513, 501513, 502513, 503513, 504513, 505513, 506513, 507513,
//     508513, 509513, 510513,
//   ],
//   [
//     472512, 473512, 474512, 475512, 476512, 477512, 478512, 479512, 480512,
//     481512, 482512, 483512, 484512, 485512, 486512, 487512, 488512, 489512,
//     490512, 491512, 492512, 493512, 494512, 495512, 496512, 497512, 498512,
//     499512, 500512, 501512, 502512, 503512, 504512, 505512, 506512, 507512,
//     508512, 509512, 510512, 511512,
//   ],
//   [
//     472511, 473511, 474511, 475511, 476511, 477511, 478511, 479511, 480511,
//     481511, 482511, 483511, 484511, 485511, 486511, 487511, 488511, 489511,
//     490511, 491511, 492511, 493511, 494511, 495511, 496511, 497511, 498511,
//     499511, 500511, 501511, 502511, 503511, 504511, 505511, 506511, 507511,
//     508511, 509511, 510511, 511511, 512511,
//   ],
//   [
//     473510, 474510, 475510, 476510, 477510, 478510, 479510, 480510, 481510,
//     482510, 483510, 484510, 485510, 486510, 487510, 488510, 489510, 490510,
//     491510, 492510, 493510, 494510, 495510, 496510, 497510, 498510, 499510,
//     500510, 501510, 502510, 503510, 504510, 505510, 506510, 507510, 508510,
//     509510, 510510, 511510, 512510,
//   ],
//   [
//     473509, 474509, 475509, 476509, 477509, 478509, 479509, 480509, 481509,
//     482509, 483509, 484509, 485509, 486509, 487509, 488509, 489509, 490509,
//     491509, 492509, 493509, 494509, 495509, 496509, 497509, 498509, 499509,
//     500509, 501509, 502509, 503509, 504509, 505509, 506509, 507509, 508509,
//     509509, 510509, 511509, 512509, 513509,
//   ],
//   [
//     474508, 475508, 476508, 477508, 478508, 479508, 480508, 481508, 482508,
//     483508, 484508, 485508, 486508, 487508, 488508, 489508, 490508, 491508,
//     492508, 493508, 494508, 495508, 496508, 497508, 498508, 499508, 500508,
//     501508, 502508, 503508, 504508, 505508, 506508, 507508, 508508, 509508,
//     510508, 511508, 512508, 513508,
//   ],
//   [
//     475507, 476507, 477507, 478507, 479507, 480507, 481507, 482507, 483507,
//     484507, 485507, 486507, 487507, 488507, 489507, 490507, 491507, 492507,
//     493507, 494507, 495507, 496507, 497507, 498507, 499507, 500507, 501507,
//     502507, 503507, 504507, 505507, 506507, 507507, 508507, 509507, 510507,
//     511507, 512507, 513507,
//   ],
//   [
//     475506, 476506, 477506, 478506, 479506, 480506, 481506, 482506, 483506,
//     484506, 485506, 486506, 487506, 488506, 489506, 490506, 491506, 492506,
//     493506, 494506, 495506, 496506, 497506, 498506, 499506, 500506, 501506,
//     502506, 503506, 504506, 505506, 506506, 507506, 508506, 509506, 510506,
//     511506, 512506, 513506, 514506,
//   ],
//   [
//     475505, 476505, 477505, 478505, 479505, 480505, 481505, 482505, 483505,
//     484505, 485505, 486505, 487505, 488505, 489505, 490505, 491505, 492505,
//     493505, 494505, 495505, 496505, 497505, 498505, 499505, 500505, 501505,
//     502505, 503505, 504505, 505505, 506505, 507505, 508505, 509505, 510505,
//     511505, 512505, 513505, 514505, 515505,
//   ],
//   [
//     476504, 477504, 478504, 479504, 480504, 481504, 482504, 483504, 484504,
//     485504, 486504, 487504, 488504, 489504, 490504, 491504, 492504, 493504,
//     494504, 495504, 496504, 497504, 498504, 499504, 500504, 501504, 502504,
//     503504, 504504, 505504, 506504, 507504, 508504, 509504, 510504, 511504,
//     512504, 513504, 514504, 515504,
//   ],
//   [
//     476503, 477503, 478503, 479503, 480503, 481503, 482503, 483503, 484503,
//     485503, 486503, 487503, 488503, 489503, 490503, 491503, 492503, 493503,
//     494503, 495503, 496503, 497503, 498503, 499503, 500503, 501503, 502503,
//     503503, 504503, 505503, 506503, 507503, 508503, 509503, 510503, 511503,
//     512503, 513503, 514503, 515503, 516503,
//   ],
//   [
//     477502, 478502, 479502, 480502, 481502, 482502, 483502, 484502, 485502,
//     486502, 487502, 488502, 489502, 490502, 491502, 492502, 493502, 494502,
//     495502, 496502, 497502, 498502, 499502, 500502, 501502, 502502, 503502,
//     504502, 505502, 506502, 507502, 508502, 509502, 510502, 511502, 512502,
//     513502, 514502, 515502, 516502,
//   ],
//   [
//     477501, 478501, 479501, 480501, 481501, 482501, 483501, 484501, 485501,
//     486501, 487501, 488501, 489501, 490501, 491501, 492501, 493501, 494501,
//     495501, 496501, 497501, 498501, 499501, 500501, 501501, 502501, 503501,
//     504501, 505501, 506501, 507501, 508501, 509501, 510501, 511501, 512501,
//     513501, 514501, 515501, 516501, 517501,
//   ],
//   [
//     478500, 479500, 480500, 481500, 482500, 483500, 484500, 485500, 486500,
//     487500, 488500, 489500, 490500, 491500, 492500, 493500, 494500, 495500,
//     496500, 497500, 498500, 499500, 500500, 501500, 502500, 503500, 504500,
//     505500, 506500, 507500, 508500, 509500, 510500, 511500, 512500, 513500,
//     514500, 515500, 516500, 517500,
//   ],
//   [
//     478499, 479499, 480499, 481499, 482499, 483499, 484499, 485499, 486499,
//     487499, 488499, 489499, 490499, 491499, 492499, 493499, 494499, 495499,
//     496499, 497499, 498499, 499499, 500499, 501499, 502499, 503499, 504499,
//     505499, 506499, 507499, 508499, 509499, 510499, 511499, 512499, 513499,
//     514499, 515499, 516499, 517499, 518499,
//   ],
//   [
//     479498, 480498, 481498, 482498, 483498, 484498, 485498, 486498, 487498,
//     488498, 489498, 490498, 491498, 492498, 493498, 494498, 495498, 496498,
//     497498, 498498, 499498, 500498, 502498, 503498, 504498, 505498, 506498,
//     507498, 508498, 509498, 510498, 511498, 512498, 513498, 514498, 515498,
//     516498, 517498, 518498,
//   ],
//   [
//     479497, 480497, 481497, 482497, 483497, 484497, 485497, 486497, 487497,
//     488497, 489497, 490497, 491497, 492497, 493497, 494497, 495497, 496497,
//     497497, 498497, 499497, 500497, 502497, 503497, 504497, 505497, 506497,
//     507497, 508497, 509497, 510497, 511497, 512497, 513497, 514497, 515497,
//     516497, 517497, 518497, 519497,
//   ],
//   [
//     480496, 481496, 482496, 483496, 484496, 485496, 486496, 487496, 488496,
//     489496, 490496, 491496, 492496, 493496, 494496, 495496, 496496, 497496,
//     498496, 499496, 503496, 504496, 505496, 506496, 507496, 508496, 509496,
//     510496, 511496, 512496, 513496, 514496, 515496, 516496, 517496, 518496,
//     519496,
//   ],
//   [
//     480495, 481495, 482495, 483495, 484495, 485495, 486495, 487495, 488495,
//     489495, 490495, 491495, 492495, 493495, 494495, 495495, 496495, 497495,
//     498495, 499495, 504495, 505495, 506495, 507495, 508495, 509495, 510495,
//     511495, 512495, 513495, 514495, 515495, 516495, 517495, 518495, 519495,
//   ],
//   [
//     481494, 482494, 483494, 484494, 485494, 486494, 487494, 488494, 489494,
//     490494, 491494, 492494, 493494, 494494, 495494, 496494, 497494, 498494,
//     504494, 505494, 506494, 507494, 508494, 509494, 510494, 511494, 512494,
//     513494, 514494, 515494, 516494, 517494, 518494, 519494, 520494,
//   ],
//   [
//     481493, 482493, 483493, 484493, 485493, 486493, 487493, 488493, 489493,
//     490493, 491493, 492493, 493493, 494493, 495493, 496493, 497493, 498493,
//     503493, 504493, 505493, 506493, 507493, 508493, 509493, 510493, 511493,
//     512493, 513493, 514493, 515493, 516493, 517493, 518493, 519493, 520493,
//   ],
//   [
//     482492, 483492, 484492, 485492, 486492, 487492, 488492, 489492, 490492,
//     491492, 492492, 493492, 494492, 495492, 496492, 497492, 505492, 506492,
//     507492, 508492, 509492, 510492, 511492, 512492, 513492, 514492, 515492,
//     516492, 517492, 518492, 519492, 520492, 521492,
//   ],
//   [
//     482491, 483491, 484491, 485491, 486491, 487491, 488491, 489491, 490491,
//     491491, 492491, 493491, 494491, 495491, 496491, 497491, 505491, 506491,
//     507491, 508491, 509491, 510491, 511491, 512491, 513491, 514491, 515491,
//     516491, 517491, 518491, 519491, 520491, 521491,
//   ],
// ].flat();

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

const originalPixelIds = [
  generateArray(30240, 157240, 1000, [86240]),
  generateArray(30239, 157239, 1000, [85239, 86239, 87239]),
  generateArray(
    30238,
    157238,
    1000,
    [82238, 83238, 84238, 85238, 86238, 87238, 88238, 89238, 80238]
  ),
  generateArray(30237, 157237, 1000, [85237, 86237, 87237]),
  generateArray(30236, 157236, 1000, [86236]),
  generateArray(30235, 157235, 1000, [86235]),
  generateArray(30234, 157234, 1000, [86234, 108234, 109234, 110234]),
  generateArray(30233, 157233, 1000, [108233, 109233, 110233]),
  generateArray(30232, 157232, 1000, [108232, 109232, 110232]),
  generateArray(30231, 157231, 1000, []),
  generateArray(30229, 157229, 1000, []),
  generateArray(30228, 157228, 1000, [118228, 125228, 147228, 149228]),
  generateArray(30227, 157227, 1000, [119227, 124227, 148228]),
  generateArray(30226, 157226, 1000, [120226, 121226, 122226, 147226, 149226]),
  generateArray(30225, 157225, 1000, [120225, 121225, 122225]),
  generateArray(30224, 157224, 1000, [120224, 121224, 122224]),
  generateArray(30223, 157223, 1000, [120223, 121223, 122223]),
  generateArray(30222, 157222, 1000, [119222, 124222, 46222]),
  generateArray(30221, 157221, 1000, [118221, 125221, 46221, 105221]),
  generateArray(30220, 157220, 1000, [46220, 105220]),
  generateArray(
    30219,
    157219,
    1000,
    [43219, 44219, 45219, 46219, 47219, 48219, 49219, 105221]
  ),
].flat();

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
        newColor: rootColor,
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
    if (pixel?.color === rootColor) {
      const index = pixelIds.indexOf(pixelId);
      if (index > -1) {
        pixelIds.splice(index, 1); // Xóa phần tử khỏi mảng
        console.log(
          `Đã xóa pixelId: ${pixelId} vì màu là ${rootColor}. Mảng pixelIds còn ${pixelIds.length} phần tử`
        );
      }
      await sleep(1000);
      continue; // Chuyển sang pixel tiếp theo
    }

    // Nếu màu không phải là "#000000", khôi phục mảng pixelIds về trạng thái ban đầu
    if (pixel?.color && pixel?.color !== rootColor) {
      console.info(`Số lần tô màu còn lại: ${i}`);

      const result = await getStartRepaint(tgWebAppData, pixel?.id);
      if (result === 401 || result === 500) {
        await sleep(1000);
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
    await sleep(1000);
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
      if (retryCount >= 10) {
        reloadIframe();
      }
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
        await sleep(1000); // Nghỉ 2 giây giữa các lần tô màu
      }
    }

    statusInfo = await getStatusUser(tgWebAppData);

    if (statusInfo === 401) {
      reloadIframe();
      return;
    } else if (statusInfo === 500) {
      retryCount++;
      console.log("Không tìm thấy user. Retry lần: ", retryCount);
      if (retryCount >= 10) {
        reloadIframe();
      }
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
