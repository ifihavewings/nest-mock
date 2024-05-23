-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 10.1.128.114    Database: scb_bill
-- ------------------------------------------------------
-- Server version	5.7.38

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `scb_withdraw_bill`
--

DROP TABLE IF EXISTS `scb_withdraw_bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_withdraw_bill` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `bill_package_num` varchar(32) DEFAULT NULL COMMENT '票据（包）号',
  `subinterval_num` varchar(32) DEFAULT NULL COMMENT '子区间号',
  `bill_type` varchar(4) DEFAULT NULL COMMENT '票据种类 AC01 银票/财票 AC02 商票',
  `bill_package_amount` decimal(16,2) DEFAULT NULL COMMENT '票据（包）金额（元）',
  `subcontract_flag` varchar(2) DEFAULT NULL COMMENT '分包流转标记',
  `bill_open_time` datetime DEFAULT NULL COMMENT '出票日期',
  `bill_expire_time` datetime DEFAULT NULL COMMENT '到期日期',
  `drawer_ent_id` bigint(20) DEFAULT NULL COMMENT '出票人id',
  `drawer_name` varchar(128) DEFAULT NULL COMMENT '出票人名称',
  `payee_ent_id` bigint(20) DEFAULT NULL COMMENT '收款人id',
  `payee_name` varchar(128) DEFAULT NULL COMMENT '收款人名称',
  `acceptor_ent_id` varchar(32) DEFAULT NULL COMMENT '承兑人id',
  `acceptor_name` varchar(128) DEFAULT NULL COMMENT '承兑人名称',
  `business_status` varchar(2) DEFAULT NULL COMMENT '业务状态 10:未发送 11:发送中 12:发送失败 13:确认失败 14:确认成功',
  `approve_status` varchar(2) DEFAULT NULL COMMENT '审批状态00:未提交 01:待复核 02:已通过 03:已驳回',
  `return_info` varchar(128) DEFAULT NULL COMMENT '发送申请返回信息',
  `apply_date` datetime DEFAULT NULL COMMENT '申请日期',
  `revision` varchar(32) DEFAULT NULL COMMENT '乐观锁',
  `create_by` bigint(20) DEFAULT NULL COMMENT '创建人',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` bigint(20) DEFAULT NULL COMMENT '更新人',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `delete_flag` char(1) DEFAULT NULL COMMENT '删除标识 是：1，否：0',
  `remark` varchar(128) DEFAULT NULL COMMENT '备注',
  `approval_by` bigint(20) DEFAULT NULL COMMENT '审批人id',
  `approver` varchar(128) DEFAULT NULL COMMENT '审批人姓名',
  `send_date` datetime DEFAULT NULL COMMENT '发送日期',
  `creator` varchar(30) DEFAULT NULL COMMENT '创建人',
  `updater` varchar(30) DEFAULT NULL COMMENT '修改人',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='撤票业务表';
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-14  9:13:30
