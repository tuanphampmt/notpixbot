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

function waitForElement(selector, minTimeout = 4000, maxTimeout = 10000) {
  return new Promise((resolve, reject) => {
    // Chờ 3 giây trước khi kiểm tra
    setTimeout(() => {
      // Kiểm tra xem phần tử đã tồn tại sẵn chưa
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
        return; // Thoát ra ngay nếu tìm thấy phần tử
      }

      // Thiết lập MutationObserver để theo dõi DOM nếu phần tử chưa tồn tại
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (!mutation.addedNodes) return;

          for (let i = 0; i < mutation.addedNodes.length; i++) {
            const node = mutation.addedNodes[i];
            if (node.matches && node.matches(selector)) {
              // Khi phần tử xuất hiện, dừng observer và trả về kết quả
              observer.disconnect();
              resolve(node);
              return;
            }
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      // Đặt timeout để tránh chờ vô hạn
      setTimeout(() => {
        observer.disconnect();
        reject(
          new Error(
            `Timeout: Phần tử ${selector} không xuất hiện sau ${maxTimeout}ms`
          )
        );
      }, maxTimeout - minTimeout); // Đặt lại timeout để tránh trừ đi 3 giây chờ ban đầu
    }, minTimeout); // Chờ 3 giây trước khi bắt đầu kiểm tra hoặc theo dõi phần tử
  });
}

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function randomPixelId() {
  return Math.floor(Math.random() * (1000000 - 0 + 1)) + 0;
}

function randomDeplay(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
  console.debug(`Chờ ${ms / 1000} giây`);
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
async function gettgWebAppData() {
  let userData = null;
  try {
    const waitLauchButton = await waitForElement(".new-message-bot-commands");
    if (waitLauchButton) {
      const lauchButton = document.querySelector(".new-message-bot-commands");
      if (lauchButton) {
        console.log("lauchButton", lauchButton);
        const clickEvent = new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
        });
        lauchButton?.dispatchEvent(clickEvent);
        const waitIframe = await waitForElement("iframe");
        if (waitIframe) {
          const iframe = document.querySelector("iframe");
          userData = parseUserData(iframe?.src || "");
        }
      }
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    return userData;
  }
}

async function main() {
  const tgWebAppData = await gettgWebAppData();
  if (tgWebAppData) {
    // Thực hiện claimPX mỗi 60 giây
    setInterval(async () => {
      const claim = await claimPX(tgWebAppData);
      if (claim) {
        console.log("Claim thành công: ", claim?.claimed);
      } else {
        window.location.reload();
      }
    }, randomDeplay(60000, 62000)); // 60 giây

    // Hàm chính để quản lý logic kiểm tra status và repaint
    const manageStatusAndRepaint = async () => {
      try {
        const statusInfo = await getStatusUser(tgWebAppData);
        if (!statusInfo) {
          window.location.reload();
          return;
        }

        // Đếm ngược số lần tô màu còn lại
        for (let i = statusInfo?.charges; i > 0; i--) {
          console.info(`Số lần tô màu còn lại: ${i}`);
          const resultStartRepaint = await getStartRepaint(tgWebAppData);

          if (resultStartRepaint && resultStartRepaint?.balance) {
            console.info(
              `Bạn đã tô màu thành công. Số dư hiện tại là: ${resultStartRepaint?.balance}`
            );
          }
          // Tạm dừng 3 giây giữa các lần tô màu
          await sleep(randomDeplay(2000, 3000));
        }

        // Kiểm tra lại trạng thái người dùng sau khi hoàn thành tô màu
        const statusInfo2 = await getStatusUser(tgWebAppData);
        if (!statusInfo2) {
          window.location.reload();
          return;
        }

        // Chờ thời gian reCharge trước khi tiếp tục tô màu
        console.info(
          `Bạn phải chờ ${statusInfo2?.reChargeTimer} giây để tiếp tục tô màu`
        );
        await sleep(statusInfo2?.reChargeTimer * 1000);

        // Sau khi hết thời gian reCharge, gọi lại hàm để tiếp tục chu kỳ
        manageStatusAndRepaint();
      } catch (error) {
        console.error("Có lỗi xảy ra: ", error);
        window.location.reload(); // Reload trang nếu có lỗi
      }
    };

    // Bắt đầu vòng lặp bằng cách gọi hàm
    manageStatusAndRepaint();
  }
}

main();
