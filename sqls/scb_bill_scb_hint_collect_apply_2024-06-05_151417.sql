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
-- Table structure for table `scb_hint_collect_apply`
--

DROP TABLE IF EXISTS `scb_hint_collect_apply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_hint_collect_apply` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `bill_id` bigint(20) DEFAULT NULL COMMENT 'scb_bill表主键',
  `bill_package_num` varchar(50) DEFAULT NULL COMMENT '票据(包)号',
  `subinterval_num` varchar(100) DEFAULT NULL COMMENT '子区间号',
  `bill_type` varchar(4) DEFAULT NULL COMMENT '票据种类，商票AC02，银票AC01',
  `bill_package_amount` decimal(13,2) DEFAULT NULL COMMENT '票据(包)金额',
  `send_date` datetime DEFAULT NULL COMMENT '发送日期',
  `approval_status` char(2) DEFAULT NULL COMMENT '审批状态：00-未提交，01-待复核，02-已通过，03-已驳回',
  `business_status` char(2) DEFAULT NULL COMMENT '业务状态：未发送10，发送中11，发送失败12，确认失败13，已签收15，已拒签16',
  `exchange_resp` varchar(255) DEFAULT NULL COMMENT '票交所返回的信息',
  `payee_name` varchar(100) DEFAULT NULL COMMENT '收款人名称',
  `payee_ent_id` bigint(20) DEFAULT NULL COMMENT '收款人id',
  `remark` varchar(100) DEFAULT '' COMMENT '说明',
  `delete_flag` char(1) NOT NULL DEFAULT '0' COMMENT '删除标识，是：1，否：0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) unsigned NOT NULL COMMENT '创建人ID(申请人id)',
  `creator` varchar(30) NOT NULL COMMENT '创建人名称(申请人名称)',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
  `updater` varchar(30) DEFAULT NULL COMMENT '更新人名称',
  `revision` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '修改版本号',
  `approver` varchar(255) DEFAULT NULL COMMENT '审批人名称',
  `approval_by` bigint(13) DEFAULT NULL COMMENT '审批人id',
  `approval_time` datetime DEFAULT NULL COMMENT '审批时间',
  `apply_time` datetime DEFAULT NULL COMMENT '申请时间',
  `apply_by` bigint(20) DEFAULT NULL COMMENT '申请人id',
  `applicant` varchar(255) DEFAULT NULL COMMENT '申请人名称',
  `msg_id` varchar(50) DEFAULT NULL COMMENT '报文标识',
  `cre_dt_tm` varchar(32) DEFAULT NULL COMMENT '报文时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-05 15:14:22
