import axios from 'axios';
import { ApiService, CsrApiService } from '..';
import { ReportRequestBody } from '../../../modules/mypage/types';

export class MypageService {
  static async asyncGetMypageUserInfo(userId: string) {
    // return await ApiService.getApi(`/user/${userId}/mypage`);
    return await axios.get(`user/${userId}/mypage`);
  }
  static async asyncPatchNickName(userId: string, value: string) {
    return await CsrApiService.patchApi(
      `/user/${userId}/nickname?value=${value}`,
      {},
    );
  }
  static async asyncSubmitReport(body: ReportRequestBody) {
    return await CsrApiService.postApi('/report', body);
  }
}
