import { Injectable, Body } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { Repository, Like } from "typeorm"
import { Attach } from 'src/entities/Attach.entity';
import { TradePartner } from "src/entities/TradePartner.entity"
import { FileUploadDTO } from './dto/fileUpload.dto';
import { FileListParam, TraderListParam } from "./interface"
import * as iconv from 'iconv-lite';
@Injectable()
export class MatieralsService {
  constructor(
    @InjectRepository(Attach) private readonly attach: Repository<Attach>,
    @InjectRepository(TradePartner) private readonly tradePartnertrader: Repository<TradePartner>) {

  }
  upload(file: FileUploadDTO) {
    console.log('upolad', file)

    const data = new Attach()
    data.annexName = file.annexName
    data.fileType = file.fileType
    data.fileName = file.fileName
    data.filePath = file.filePath
    console.log('filedto=========')
    console.log(file)
    return this.attach.save(data)
  }

  // upolad================== {
  //   body: [Object: null prototype] {
  //     annexName: 'XXXXXX_bbb_20240515100532',
  //     fileType: 'bbb'
  //   },
  //   file: {
  //     fieldname: 'file',
  //     originalname: 'html2canvas.pdf',
  //     encoding: '7bit',
  //     mimetype: 'application/pdf',
  //     destination: 'D:\\nest-mock\\static\\files',
  //     filename: 'b511c3ea5cff10b223f31e8bb810cc6421html2canvas.pdf',
  //     path: 'D:\\nest-mock\\static\\files\\b511c3ea5cff10b223f31e8bb810cc6421html2canvas.pdf',
  //     size: 216537
  //   }
  // }
  
  async uploadTest(o) {
    console.log('upolad==================')
    console.log(o.file.originalname)
    const data = {
      fileType: o.body.fileType,
      annexName: o.body.annexName,
      fileName: o.file.originalname,
      filePath: `/pmobile/ss/static/files/${iconv.encode(o.file.originalname, 'utf8')}`
    }
 

    const res =await this.attach.save(data)
    return res;
  }

  async findAll(body: FileListParam) {
    const data = await this.attach.find({
      // where: {
      //   batchNumber: Like(`%${body.batchNumber}%`),
      //   // fileType: body.fileType,
      //   annexName: Like(`%${body.annexName}%`),

      // },
      order: {
        createTime: 'DESC',
      },
      skip: (body.page - 1) * body.size,
      take: body.size
    })
    const total = await this.attach.count({
      // where: {
      //   batchNumber: Like(`%${body.batchNumber}%`),
      //   // fileType: body.fileType,
      //   annexName: Like(`%${body.annexName}%`),
      // }
    })
    return {
      data,
      total
    }
  }

  async findOneById({ id }) {
    const data = this.attach.find({
      where: {
        id
      }
    })
    return data
  }

  /**
   * 新增交易对手
   * @param body 
   */
  async addTrader(body) {
    const trader = new TradePartner()
    console.log("body??????????")
    console.log(body)
    // businessPart
    trader.tradeName = body.tradeName
    trader.bankAccount = body.bankAccount
    trader.bankAccountName = body.bankAccountName
    trader.businessCode = body.businessCode
    trader.businessPart = body.businessPart
    trader.agencyName = body.agencyName
    trader.agencyCode = body.agencyCode
    trader.societyCreditCode = body.societyCreditCode
    trader.IsTicketPlatform = body.IsTicketPlatform
    trader.channelName = body.channelName
    trader.channelCode = body.channelCode
    trader.billType = body.billType
    trader.bankOpenName = body.bankOpenName
    trader.bankOpenCode = body.bankOpenCode
    trader.billAccount = body.billAccount
    console.log(trader)
    const data = await this.tradePartnertrader.save(trader)
    return data
  }
  /**
   * 新增交易对手
   * @param body 
   */
  async delTrader(body) {
    const id = body.id
    const data = await this.tradePartnertrader.update(id, {deleteFlag: '1'})
    return data
  }
  /**
   * 新增交易对手
   * @param body 
   */
  async delPermanentTrader(body) {
    const id = body.id
    const data = await this.tradePartnertrader.delete(id)
    return data
  }
  /**
   * 更新交易对手
   * @param body 
   */
  async updateTrader(body) {
    const trader = new TradePartner()
    trader.id = body.id
    console.log("body??????????")
    console.log(body)
    // businessPart
    trader.tradeName = body.tradeName
    trader.bankAccount = body.bankAccount
    trader.bankAccountName = body.bankAccountName
    trader.businessCode = body.businessCode
    trader.businessPart = body.businessPart
    trader.agencyName = body.agencyName
    trader.agencyCode = body.agencyCode
    trader.societyCreditCode = body.societyCreditCode
    trader.IsTicketPlatform = body.IsTicketPlatform
    trader.channelName = body.channelName
    trader.channelCode = body.channelCode
    trader.billType = body.billType
    trader.bankOpenName = body.bankOpenName
    trader.bankOpenCode = body.bankOpenCode
    trader.billAccount = body.billAccount
    
    const data = await this.tradePartnertrader.update(trader.id,trader)
    return data
  }

  /**
   * 交易对手列表
   * @param body 
   */
  
  async getTradeList(body: TraderListParam) {
    const data = await this.tradePartnertrader.find({
      where: {
        // tradeName: Like(`%${body.tradeName}%`),
        // // fileType: body.fileType,
        // businessCode: Like(`%${body.businessCode}%`),
        deleteFlag: '0'
      },
      order: {
        createTime: 'DESC',
      },
      skip: (body.page - 1) * body.size,
      take: body.size
    })
    const total = await this.tradePartnertrader.count({
      where: {
        // tradeName: Like(`%${body.tradeName}%`),
        // // fileType: body.fileType,
        // businessCode: Like(`%${body.businessCode}%`),
        deleteFlag: '0'
      }
    })
    return {
      records: data,
      total
    }
  }

}
