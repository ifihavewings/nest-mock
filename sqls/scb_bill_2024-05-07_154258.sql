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
-- Table structure for table `cust_info_attibute`
--

DROP TABLE IF EXISTS `cust_info_attibute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cust_info_attibute` (
  `id` bigint(30) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `cust_id` bigint(20) NOT NULL COMMENT '企业id，外键指向 cust_info_m.cust_id',
  `bus_type` varchar(2) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '行业分类，',
  `is_farm` varchar(2) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '是否涉农，',
  `is_green` varchar(2) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '是否绿色, ',
  `enterprise_type` varchar(2) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '企业性质,0-国有企业，1-私营企业，2-合资企业，3-外资企业，',
  `is_tech` varchar(2) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '是否科技公司，',
  `scale` varchar(2) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '企业规模，',
  `delete_flag` char(1) CHARACTER SET utf8mb4 NOT NULL DEFAULT '0' COMMENT '删除标识，是：1，否：0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) unsigned NOT NULL COMMENT '创建人ID',
  `creator` varchar(30) CHARACTER SET utf8mb4 NOT NULL COMMENT '创建人名称',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
  `updater` varchar(30) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '更新人名称',
  `revision` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '修改版本号',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `idx_cust_info_attibute_1` (`cust_id`)
) ENGINE=InnoDB AUTO_INCREMENT=260 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='企业信息属性表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_bank_account`
--

DROP TABLE IF EXISTS `scb_bank_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_bank_account` (
  `id` bigint(30) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `cust_id` bigint(30) NOT NULL COMMENT '企业id，外键指向 cust_info_m.cust_id',
  `bank_account` varchar(20) DEFAULT '' COMMENT '银行账号',
  `bank_name` varchar(50) DEFAULT '' COMMENT '银行账户名称',
  `open_bank_no` varchar(20) DEFAULT '' COMMENT '银行开户行行号',
  `open_bank_name` varchar(50) DEFAULT '' COMMENT '银行开户行名称',
  `open_sub_bank_no` varchar(20) DEFAULT '' COMMENT '银行开户行支行行号',
  `open_sub_bank_name` varchar(50) DEFAULT '' COMMENT '银行开户行支行名称',
  `bank_account_type` varchar(2) DEFAULT '' COMMENT '银行类型 基本存款  一般存款  专用存款 临时存款 人名币NRA账户 其他账户',
  `driblet_auth_amt` decimal(6,2) NOT NULL COMMENT '小额鉴权金额',
  `driblet_auth_flag` char(1) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '鉴权标识，已鉴权：1，未鉴权：0',
  `report_flag` char(1) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '报备状态，已报备：1，未报备：0',
  `delete_flag` char(1) CHARACTER SET utf8mb4 NOT NULL DEFAULT '0' COMMENT '删除标识，是：1，否：0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) unsigned NOT NULL COMMENT '创建人ID',
  `creator` varchar(30) CHARACTER SET utf8mb4 NOT NULL COMMENT '创建人名称',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
  `updater` varchar(30) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '更新人名称',
  `revision` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '修改版本号',
  PRIMARY KEY (`id`),
  KEY `idx_scb_bank_account_1` (`cust_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='企业银行账户信息';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_bill`
--

DROP TABLE IF EXISTS `scb_bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_bill` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `bill_package_num` varchar(50) DEFAULT NULL COMMENT '票据(包)号',
  `subinterval_num` varchar(100) DEFAULT NULL COMMENT '子区间号',
  `init_subinterval_num` varchar(100) DEFAULT NULL COMMENT '初始子区间',
  `bill_type` varchar(4) DEFAULT NULL COMMENT '票据种类，商票AC02，银票AC01',
  `bill_package_init_amount` decimal(13,2) DEFAULT NULL COMMENT '初始金额(元)',
  `bill_package_amount` decimal(13,2) DEFAULT NULL COMMENT '票据(包)金额（元）',
  `bill_package_available_amount` decimal(13,2) DEFAULT NULL COMMENT '票据(包)可用金额（元）',
  `is_root_bill` char(2) DEFAULT NULL COMMENT '是否根票0不是1是',
  `root_bill_id` bigint(20) DEFAULT NULL COMMENT '根票id',
  `parent_bill_id` bigint(20) DEFAULT NULL COMMENT '上一级票据id',
  `un_exchange_flag` char(4) DEFAULT NULL COMMENT '不得转让标记EM01不得转让EM00可再转让',
  `sub_transfer_flag` varchar(10) DEFAULT NULL COMMENT '分包流转标记0不是1是',
  `trade_register_state` varchar(4) DEFAULT NULL COMMENT '贸易背景登记状态',
  `lock_flag` varchar(4) DEFAULT NULL COMMENT '挑票锁定标识0未锁定1锁定',
  `freeze_status` char(2) DEFAULT NULL COMMENT '冻结标识0未冻结1全部冻结2部分冻结',
  `is_split_flag` char(2) DEFAULT NULL COMMENT '是否拆包0否1是',
  `bill_state` varchar(4) DEFAULT NULL COMMENT '票据状态：00已出票，01已承兑，02已收票，03已到期，04终止，05已结清',
  `bill_flow_flag` varchar(4) DEFAULT NULL COMMENT '票据流转标识：00待收票，01可流通，02已锁定，03不可转让，04已质押，05待赎回，06托收在途，07追索中，08已结束',
  `draw_date` datetime DEFAULT NULL COMMENT '出票日期',
  `expire_date` datetime DEFAULT NULL COMMENT '到期日期，出票日期不超6个月',
  `draw_ent_name` varchar(128) DEFAULT NULL COMMENT '出票人名称',
  `draw_ent_id` bigint(20) DEFAULT NULL COMMENT '出票人id',
  `draw_ent_code` varchar(30) DEFAULT NULL COMMENT '出票人统一社会信用代码',
  `draw_account_name` varchar(128) DEFAULT NULL COMMENT '出票人银行账户名称',
  `draw_account_no` varchar(100) DEFAULT NULL COMMENT '出票人银行账号',
  `draw_bank_name` varchar(128) DEFAULT NULL COMMENT '出票人银行账户开户行机构参与者名称',
  `draw_channel_code` varchar(50) DEFAULT NULL COMMENT '出票人渠道号',
  `draw_channel_name` varchar(128) DEFAULT NULL COMMENT '出票人渠道名称',
  `payee_is_bill_plat` varchar(4) DEFAULT NULL COMMENT '收款人是否为供票平台企业',
  `payee_ent_name` varchar(128) DEFAULT NULL COMMENT '收款人名称',
  `payee_ent_id` bigint(20) DEFAULT NULL COMMENT '收款人id',
  `payee_ent_code` varchar(30) DEFAULT NULL COMMENT '收款人统一社会信用代码',
  `payee_account_no` varchar(30) DEFAULT NULL COMMENT '收款人账户号',
  `payee_account_name` varchar(128) DEFAULT NULL COMMENT '收款人银行账户名称',
  `payee_bank_name` varchar(128) DEFAULT NULL COMMENT '收款人银行账户开户行机构参与者名称',
  `payee_bank_code` varchar(20) DEFAULT NULL COMMENT '收款人银行账户开户行机构参与者编码',
  `payee_is_special` varchar(4) DEFAULT NULL COMMENT '是否特殊收款人0不是1是',
  `payee_channel_code` varchar(50) DEFAULT NULL COMMENT '收款人渠道号',
  `payee_channel_name` varchar(128) DEFAULT NULL COMMENT '收款人渠道名称',
  `accept_is_bill_plat` varchar(10) DEFAULT NULL COMMENT '承兑人是否为供票平台企业',
  `accept_channel_name` varchar(100) DEFAULT NULL COMMENT '承兑人渠道名称',
  `accept_channel_code` varchar(20) DEFAULT NULL COMMENT '承编码兑人渠道',
  `accept_ent_name` varchar(128) DEFAULT NULL COMMENT '承兑人名称',
  `accept_ent_id` bigint(20) DEFAULT NULL COMMENT '承兑人id',
  `accept_ent_code` varchar(30) DEFAULT NULL COMMENT '承兑人统一社会信用代码',
  `accept_account_no` varchar(30) DEFAULT NULL COMMENT '承兑人账户号',
  `accept_account_name` varchar(255) DEFAULT NULL COMMENT '承兑人银行账户名称',
  `accept_bank_name` varchar(255) DEFAULT NULL COMMENT '承兑人银行账户开户行机构参与者名称',
  `accept_bank_code` varchar(20) DEFAULT NULL COMMENT '承兑人银行账户开户行机构参与者编码',
  `remark` varchar(128) DEFAULT '' COMMENT '说明',
  `delete_flag` char(1) NOT NULL DEFAULT '0' COMMENT '删除标识，是：1，否：0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) unsigned NOT NULL COMMENT '创建人ID(申请人id)',
  `creator` varchar(30) NOT NULL COMMENT '创建人名称(申请人名称)',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
  `updater` varchar(30) DEFAULT NULL COMMENT '更新人名称',
  `revision` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '修改版本号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_bill_state_flow`
--

DROP TABLE IF EXISTS `scb_bill_state_flow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_bill_state_flow` (
  `id` bigint(20) NOT NULL,
  `busi_scene` varchar(30) DEFAULT NULL COMMENT '业务场景',
  `busi_act` varchar(30) DEFAULT NULL COMMENT '业务行为',
  `bill_state_pre` varchar(20) DEFAULT NULL COMMENT '前票据状态：已出票CS01，已承兑CS02，已收票CS03，已到期CS04，已终止CS05，已结清CS06',
  `bill_flow_flag_pre` varchar(6) DEFAULT NULL COMMENT '前流通标志：待收票TF0101，可流通TF0301，已锁定TF0302，不可转让TF0303，已质押TF0304，待赎回TF0305，托收在途TF0401，追索中TF0402',
  `bill_state_after` varchar(20) DEFAULT NULL COMMENT '后票据状态',
  `bill_flow_flag_after` varchar(6) DEFAULT NULL COMMENT '后流通标志',
  `remark` varchar(128) DEFAULT '' COMMENT '说明',
  `delete_flag` char(1) NOT NULL DEFAULT '0' COMMENT '删除标识，是：1，否：0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) unsigned NOT NULL COMMENT '创建人ID(申请人id)',
  `creator` varchar(30) NOT NULL COMMENT '创建人名称(申请人名称)',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
  `updater` varchar(30) DEFAULT NULL COMMENT '更新人名称',
  `revision` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '修改版本号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_bill_subinterval`
--

DROP TABLE IF EXISTS `scb_bill_subinterval`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_bill_subinterval` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `bill_id` bigint(20) DEFAULT NULL COMMENT '票据表ID',
  `freeze_subinterval_begin` varchar(100) DEFAULT NULL COMMENT '冻结子区间开始',
  `freeze_subinterval_end` varchar(100) DEFAULT NULL COMMENT '冻结子区间结束',
  `freeze_type` char(1) NOT NULL COMMENT '冻结解冻标识 0冻结 1解冻 2部分解冻',
  `parent_id` bigint(20) DEFAULT NULL COMMENT '父级ID',
  `freeze_amount` decimal(16,2) DEFAULT NULL COMMENT '冻结解冻金额',
  `freeze_date` datetime DEFAULT NULL COMMENT '冻结解冻日期',
  `remark` varchar(255) DEFAULT '',
  `delete_flag` char(1) NOT NULL DEFAULT '0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `create_by` bigint(20) unsigned NOT NULL,
  `creator` varchar(30) NOT NULL,
  `update_time` datetime DEFAULT NULL,
  `update_by` bigint(20) unsigned DEFAULT NULL,
  `updater` varchar(30) DEFAULT NULL,
  `revision` int(11) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_cust_report`
--

DROP TABLE IF EXISTS `scb_cust_report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_cust_report` (
  `id` bigint(30) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `cust_id` bigint(20) DEFAULT NULL COMMENT '企业信息id，cust_info_m.cust_id',
  `report_status` char(1) DEFAULT '0' COMMENT '报备状态 0已报备 1未报备 2已注销',
  `bill_account` varchar(40) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '票据账号，票交所返回',
  `settled_account_count` bigint(20) NOT NULL COMMENT '已报备结算账户个数',
  `business_status` varchar(2) DEFAULT '0' COMMENT '业务状态 0初始报备-未提交,1初始报备-待复核,2初始报备-撤回提交,3初始报备-已通过,4初始报备-已驳回,5初始报备-发送中,6初始报备-发送失败,7初始报备-确认失败,8初始报备-确认成功',
  `approval_by` varchar(32) DEFAULT NULL COMMENT '审批人id',
  `approver` varchar(32) CHARACTER SET utf8mb4 NOT NULL DEFAULT '' COMMENT '审批人名称',
  `approval_time` datetime NOT NULL COMMENT '审批时间',
  `delete_flag` char(1) CHARACTER SET utf8mb4 NOT NULL DEFAULT '0' COMMENT '删除标识，是：1，否：0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) unsigned NOT NULL COMMENT '创建人ID',
  `creator` varchar(30) CHARACTER SET utf8mb4 NOT NULL COMMENT '创建人名称',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
  `updater` varchar(30) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '更新人名称',
  `revision` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '修改版本号',
  PRIMARY KEY (`id`),
  KEY `idx_scb_cust_report_1` (`cust_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='企业信息报备信息表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_cust_report_apply`
--

DROP TABLE IF EXISTS `scb_cust_report_apply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_cust_report_apply` (
  `id` bigint(30) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `report_id` bigint(20) DEFAULT NULL COMMENT '企业信息报备id，scb_cust_report.id',
  `cust_id` bigint(20) DEFAULT NULL COMMENT '企业信息id，cust_info_m.cust_id',
  `cust_name` varchar(128) DEFAULT NULL COMMENT '企业名称',
  `cust_usci` varchar(30) CHARACTER SET utf8mb4 NOT NULL COMMENT '统一社会信用码',
  `email` varchar(40) DEFAULT NULL COMMENT '邮箱',
  `cust_address` varchar(200) DEFAULT NULL COMMENT '企业注册详细地址',
  `main_busi_address` varchar(200) DEFAULT NULL COMMENT '主要经营地址',
  `bus_type` varchar(4) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '行业分类，',
  `is_farm` char(1) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '是否涉农，',
  `is_green` char(1) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '是否绿色, ',
  `enterprise_property` varchar(2) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '企业性质,0-国有企业，1-私营企业，2-合资企业，3-外资企业，',
  `is_tech` char(1) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '是否科技公司，',
  `scale` varchar(4) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '企业规模，',
  `apply_time` datetime DEFAULT NULL COMMENT '申请时间',
  `send_time` datetime DEFAULT NULL COMMENT '发送时间',
  `bill_account` varchar(40) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '票据账号，票交所返回',
  `res_message` varchar(255) DEFAULT NULL COMMENT '鑫海汇返回的报备信息',
  `opera_type` varchar(1) CHARACTER SET utf8mb4 NOT NULL DEFAULT '0' COMMENT '操作类型，初始报备：1，修改报备：2， 注销报备：3',
  `delete_flag` varchar(1) CHARACTER SET utf8mb4 NOT NULL DEFAULT '0' COMMENT '删除标识，是：1，否：0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) unsigned NOT NULL COMMENT '创建人ID',
  `creator` varchar(30) CHARACTER SET utf8mb4 NOT NULL COMMENT '创建人名称',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
  `updater` varchar(30) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '更新人名称',
  `revision` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '修改版本号',
  PRIMARY KEY (`id`),
  KEY `idx_scb_cust_report_apply_1` (`cust_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='企业信息报备申请表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_draw_apply`
--

DROP TABLE IF EXISTS `scb_draw_apply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_draw_apply` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `bill_package_num` varchar(50) DEFAULT NULL COMMENT '票据(包)号',
  `subinterval_num` varchar(100) DEFAULT NULL COMMENT '子区间号',
  `bill_type` varchar(4) DEFAULT NULL COMMENT '票据种类，商票AC02，银票AC01',
  `bill_package_amount` decimal(13,2) DEFAULT NULL COMMENT '票据(包)金额（元）',
  `un_exchange_flag` char(4) DEFAULT NULL COMMENT '不得转让标记EM01不得转让EM00可再转让',
  `sub_transfer_flag` char(2) DEFAULT NULL COMMENT '分包流转标记',
  `send_date` datetime DEFAULT NULL COMMENT '发送日期',
  `draw_date` datetime DEFAULT NULL COMMENT '出票日期',
  `expire_date` datetime DEFAULT NULL COMMENT '到期日期，出票日期不超6个月',
  `drawer_ent_name` varchar(128) DEFAULT NULL COMMENT '出票人名称',
  `drawer_ent_id` bigint(20) DEFAULT NULL COMMENT '出票人id',
  `drawer_ent_code` varchar(30) DEFAULT NULL COMMENT '出票人统一社会信用代码',
  `draw_account_name` varchar(100) DEFAULT NULL COMMENT '出票人银行账户名称',
  `draw_account_no` varchar(100) DEFAULT NULL COMMENT '出票人银行账号',
  `draw_bank_name` varchar(255) DEFAULT NULL COMMENT '出票人银行账户开户行机构参与者名称',
  `payee_is_bill_plat` char(1) DEFAULT NULL COMMENT '收款人是否为供票平台企业0不是1是',
  `payee_ent_name` varchar(128) DEFAULT NULL COMMENT '收款人名称',
  `payee_ent_id` bigint(20) DEFAULT NULL COMMENT '收款人id',
  `payee_ent_code` varchar(30) DEFAULT NULL COMMENT '收款人统一社会信用代码',
  `payee_account_no` varchar(255) DEFAULT NULL COMMENT '收款人银行账号',
  `payee_account_name` varchar(255) DEFAULT NULL COMMENT '收款人银行账户名称',
  `payee_bank_name` varchar(255) DEFAULT NULL COMMENT '收款人银行账户开户行机构参与者名称',
  `payee_bank_code` varchar(20) DEFAULT NULL COMMENT '收款人银行账户开户行机构参与者编码',
  `payee_is_special` char(1) DEFAULT NULL COMMENT '是否特殊收款人',
  `accept_is_bill_plat` char(1) DEFAULT NULL COMMENT '承兑人是否为供票平台企业0不是1是',
  `accept_channel_name` varchar(100) DEFAULT NULL COMMENT '承兑人渠道名称',
  `accept_channel_code` varchar(10) DEFAULT NULL COMMENT '承兑人渠道编码',
  `accept_ent_name` varchar(128) DEFAULT NULL COMMENT '承兑人名称',
  `accept_ent_id` bigint(20) DEFAULT NULL COMMENT '承兑人id',
  `accept_ent_code` varchar(30) DEFAULT NULL COMMENT '承兑人统一社会信用代码',
  `accept_account_no` varchar(100) DEFAULT NULL COMMENT '承兑人银行账号',
  `accept_account_name` varchar(255) DEFAULT NULL COMMENT '承兑人银行账户名称',
  `accept_bank_name` varchar(255) DEFAULT NULL COMMENT '承兑人银行账户开户行机构参与者名称',
  `accept_bank_code` varchar(20) DEFAULT NULL COMMENT '承兑人银行账户开户行机构参与者编码',
  `approval_status` varchar(2) DEFAULT NULL COMMENT '审批状态：未提交10，待复核20，已通过30,已驳回40',
  `bill_file_id` bigint(13) DEFAULT NULL COMMENT '票样id',
  `business_status` varchar(2) DEFAULT NULL COMMENT '业务状态：未发送10，发送中20，发送失败30，确认成功40，确认失败50',
  `exchange_resp` varchar(255) DEFAULT NULL COMMENT '票交所返回的信息',
  `remark` varchar(128) DEFAULT '' COMMENT '说明',
  `delete_flag` char(1) NOT NULL DEFAULT '0' COMMENT '删除标识，是：1，否：0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) unsigned NOT NULL COMMENT '创建人ID(申请人id)',
  `creator` varchar(30) NOT NULL COMMENT '创建人名称(申请人名称)',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
  `updater` varchar(30) DEFAULT NULL COMMENT '更新人名称',
  `revision` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '修改版本号',
  `approver` varchar(255) DEFAULT NULL COMMENT '审批人名称',
  `approval_by` bigint(13) DEFAULT NULL COMMENT '审批人id',
  `approval_time` datetime DEFAULT NULL COMMENT '审批时间',
  `apply_date` datetime DEFAULT NULL COMMENT '申请时间',
  `apply_by` varchar(255) DEFAULT NULL COMMENT '申请人id',
  `applicant` bigint(20) DEFAULT NULL COMMENT '申请人名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_endorse_apply`
--

DROP TABLE IF EXISTS `scb_endorse_apply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_endorse_apply` (
  `id` bigint(20) NOT NULL COMMENT '申请id',
  `endo_apply_no` bigint(20) NOT NULL COMMENT '背书申请编号',
  `channel_name` varchar(100) NOT NULL COMMENT '被背书人业务办理渠道名称',
  `endorsee_rec_type` varchar(2) NOT NULL COMMENT '被背书人识别类型，票据账户：，银行账户： ',
  `non_transfer_mark` varchar(2) NOT NULL COMMENT '不可转让标记，可转让：，不可转让： ',
  `endorsee_usci` varchar(30) NOT NULL COMMENT '被背书人统一社会信用码',
  `endorsee_name` varchar(128) NOT NULL COMMENT '被背书人名称',
  `endorsee_bank_account` varchar(20) NOT NULL COMMENT '被背书人银行账户',
  `endorsee_bank_account_name` varchar(50) NOT NULL COMMENT '被背书人银行账户名称',
  `endorsee_open_bank_parti_name` varchar(100) NOT NULL COMMENT '被背书人银行账户开户行机构参与者名称',
  `endorsee_bill_account` varchar(30) NOT NULL COMMENT '被背书人票据账号',
  `remark` varchar(100) NOT NULL DEFAULT '' COMMENT '备注',
  `bill_count` bigint(20) NOT NULL COMMENT '票据张数',
  `sum_amt` decimal(20,2) NOT NULL COMMENT '票据总金额',
  `endorse_sum_amt` decimal(20,2) NOT NULL COMMENT '背书总金额',
  `apply_date` datetime NOT NULL COMMENT '申请日期',
  `send_date` datetime NOT NULL COMMENT '发送日期',
  `endorse_to_scb` varchar(2) NOT NULL COMMENT '背书到供票系统，是：01，否：02',
  `approve_state` varchar(2) NOT NULL COMMENT '审批状态，',
  `batch_state` varchar(2) NOT NULL COMMENT '批次状态，',
  `approval_by` varchar(32) DEFAULT NULL COMMENT '审批人id',
  `approver` varchar(32) NOT NULL DEFAULT '' COMMENT '审批人名称',
  `approval_time` datetime NOT NULL COMMENT '审批时间',
  `delete_flag` char(1) NOT NULL DEFAULT '0' COMMENT '删除标识，是：1，否：0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) unsigned NOT NULL COMMENT '创建人ID',
  `creator` varchar(30) NOT NULL COMMENT '创建人名称',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
  `updater` varchar(30) DEFAULT NULL COMMENT '更新人名称',
  `revision` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '修改版本号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='背书申请信息表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_endorse_detail`
--

DROP TABLE IF EXISTS `scb_endorse_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_endorse_detail` (
  `id` bigint(20) NOT NULL COMMENT '自增主键',
  `endorse_apply_id` bigint(20) NOT NULL COMMENT '背书申请表Id，外键指向 scb_endorse_apply.id',
  `bill_id` bigint(20) NOT NULL COMMENT '票据Id，外键指向 票据表.id',
  `bill_no` varchar(32) NOT NULL COMMENT '票据（包）号，外键指向 票据表.票据号',
  `subticket_interval` varchar(30) NOT NULL COMMENT '子票区间',
  `bill_type` varchar(4) DEFAULT '0' COMMENT '票据种类 0商票 1银票',
  `package_flow_type` varchar(4) DEFAULT '0' COMMENT '分包流转标记 0可流转 1不可流转',
  `package_amount` decimal(20,2) NOT NULL DEFAULT '0.00' COMMENT '票据包金额',
  `endorse_amt` decimal(20,2) NOT NULL DEFAULT '0.00' COMMENT '背书金额',
  `endorse_interval` varchar(30) NOT NULL COMMENT '背书金额区间',
  `endorse_remaining_interval` varchar(30) DEFAULT NULL COMMENT '背书剩余金额区间',
  `createtime` datetime NOT NULL COMMENT '出票日期',
  `endtime` datetime DEFAULT NULL COMMENT '到期日期',
  `drawer_name` varchar(128) DEFAULT NULL COMMENT '出票人名称',
  `acceptor_name` varchar(128) DEFAULT NULL COMMENT '承兑人名称',
  `apply_res` varchar(120) DEFAULT NULL COMMENT '发送申请返回结果',
  `buss_state` varchar(2) NOT NULL COMMENT '明细状态，发送成功：01，发送失败：02',
  `delete_flag` char(1) NOT NULL DEFAULT '0' COMMENT '删除标识，是：1，否：0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) unsigned NOT NULL COMMENT '创建人ID',
  `creator` varchar(30) NOT NULL COMMENT '创建人名称',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
  `updater` varchar(30) DEFAULT NULL COMMENT '更新人名称',
  `revision` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '修改版本号',
  PRIMARY KEY (`id`),
  KEY `idx_scb_endorse_detail_1` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='贸易背景明细';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_endorse_sign`
--

DROP TABLE IF EXISTS `scb_endorse_sign`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_endorse_sign` (
  `id` bigint(20) NOT NULL COMMENT '自增主键',
  `bill_no` varchar(32) NOT NULL COMMENT '票据（包）号，外键指向 票据表.票据号',
  `subticket_interval` varchar(30) NOT NULL COMMENT '子票区间',
  `bill_type` varchar(4) DEFAULT '0' COMMENT '票据种类 0商票 1银票',
  `createtime` datetime NOT NULL COMMENT '出票日期',
  `endtime` datetime NOT NULL COMMENT '到期日期',
  `drawer_name` varchar(128) DEFAULT NULL COMMENT '出票人名称',
  `acceptor_name` varchar(128) DEFAULT NULL COMMENT '承兑人名称',
  `non_transfer_mark` varchar(4) NOT NULL COMMENT '不可转让标记，可转让：，不可转让： ',
  `package_flow_type` varchar(4) DEFAULT '0' COMMENT '分包流转标记 0可流转 1不可流转',
  `endorse_amt` decimal(20,2) NOT NULL DEFAULT '0.00' COMMENT '背书金额',
  `endorse_interval` varchar(30) NOT NULL COMMENT '背书金额区间',
  `endorse_name` varchar(128) DEFAULT NULL COMMENT '背书人名称',
  `endorse_cust_id` bigint(20) DEFAULT NULL COMMENT '背书人企业id',
  `endorse_credit` varchar(50) DEFAULT NULL COMMENT '背书人统一社会信用代码',
  `apply_date` datetime NOT NULL COMMENT '背书申请日期',
  `approve_state` varchar(2) NOT NULL COMMENT '审批状态，',
  `buss_state` varchar(2) NOT NULL COMMENT '业务状态，',
  `sign_type` varchar(2) NOT NULL COMMENT '签收类型，',
  `cancel_reson` varchar(120) DEFAULT NULL COMMENT '作废原因',
  `sign_fail_reson` varchar(120) DEFAULT NULL COMMENT '签收失败原因',
  `approval_by` varchar(32) DEFAULT NULL COMMENT '审批人id',
  `approver` varchar(32) NOT NULL DEFAULT '' COMMENT '审批人名称',
  `approval_time` datetime NOT NULL COMMENT '审批时间',
  `delete_flag` char(1) NOT NULL DEFAULT '0' COMMENT '删除标识，是：1，否：0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) unsigned NOT NULL COMMENT '创建人ID',
  `creator` varchar(30) NOT NULL COMMENT '创建人名称',
  `revision` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '修改版本号',
  PRIMARY KEY (`id`),
  KEY `idx_scb_endorse_sign_1` (`bill_no`),
  KEY `idx_scb_endorse_sign_2` (`subticket_interval`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='背书签收信息表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_file_manage`
--

DROP TABLE IF EXISTS `scb_file_manage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_file_manage` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `batch_number` varchar(32) DEFAULT NULL COMMENT '附件批次号',
  `annex_name` varchar(128) DEFAULT NULL COMMENT '附件名称',
  `file_date` datetime DEFAULT NULL COMMENT '上传日期',
  `file_name` varchar(128) DEFAULT NULL COMMENT '文件名称',
  `file_type` varchar(4) DEFAULT NULL COMMENT '附件类型 FT01  营业执照 FT02  法定代表人 FT03  财务报表 FT04  授权经办人 FT05  贴现申请人授权委托书 FT06  征信信息 FT07  其他 FT08  企业承诺函 FT09  冻结 FT10  冻结解除 FT11  贴现协议 FT12  征信授权书',
  `file_status` varchar(2) DEFAULT NULL COMMENT '上传状态',
  `file_sign` varchar(2) DEFAULT NULL COMMENT '锁定标识0锁定1未锁定',
  `revision` varchar(32) DEFAULT NULL COMMENT '乐观锁',
  `create_by` bigint(20) DEFAULT NULL COMMENT '创建人',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` bigint(20) DEFAULT NULL COMMENT '更新人',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `delete_flag` char(1) DEFAULT NULL COMMENT '删除标识 0删除 1正常',
  `file_path` varchar(32) DEFAULT NULL COMMENT '文件上传路径',
  `remark` varchar(128) DEFAULT NULL COMMENT '备注',
  `creator` varchar(30) DEFAULT NULL COMMENT '创建人',
  `updater` varchar(30) DEFAULT NULL COMMENT '修改人',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='文件上传管理';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_file_relate`
--

DROP TABLE IF EXISTS `scb_file_relate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_file_relate` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `business_id` varchar(32) DEFAULT NULL COMMENT '业务id',
  `file_manage_id` varchar(32) DEFAULT NULL COMMENT 'file_manage表id',
  `revision` varchar(32) DEFAULT NULL COMMENT '乐观锁',
  `create_by` bigint(20) DEFAULT NULL COMMENT '创建人',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` bigint(20) DEFAULT NULL COMMENT '更新人',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `delete_flag` varchar(2) DEFAULT NULL COMMENT '删除标识 0删除 1正常',
  `remark` varchar(128) DEFAULT NULL COMMENT '备注',
  `creator` varchar(30) DEFAULT NULL COMMENT '创建人',
  `updater` varchar(30) DEFAULT NULL COMMENT '修改人',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='文件信息关联表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_freeze_bill`
--

DROP TABLE IF EXISTS `scb_freeze_bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_freeze_bill` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '自增主键',
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
  `acceptor_ent_id` bigint(20) DEFAULT NULL COMMENT '承兑人id',
  `acceptor_name` varchar(128) DEFAULT NULL COMMENT '承兑人名称',
  `interval_number` varchar(32) DEFAULT NULL COMMENT '初始子区间号',
  `initial_bill_amount` decimal(16,2) DEFAULT NULL COMMENT '初始票据金额',
  `unfreeze_amount` decimal(16,2) DEFAULT NULL COMMENT '未冻结票据金额',
  `last_freeze_date` datetime DEFAULT NULL COMMENT '最近一次冻结日期',
  `business_status` varchar(2) DEFAULT NULL COMMENT '业务状态 10:未发送 11:发送中 12:发送失败 13:确认失败 14:确认成功',
  `approval_status` varchar(2) DEFAULT NULL COMMENT '审批状态 00:未提交 01:待复核 02:已通过 03:已驳回',
  `return_infor` varchar(128) DEFAULT NULL COMMENT '发送申请返回信息',
  `freeze_type` char(1) DEFAULT NULL COMMENT '冻结解冻标识 0冻结 1解冻',
  `legal_person_id` bigint(20) DEFAULT NULL COMMENT '法务审批人id',
  `legal_person_name` varchar(50) DEFAULT NULL COMMENT '法务审批人姓名',
  `legal_status` varchar(2) DEFAULT NULL COMMENT '法务审批状态 01待复核 02:已通过 03:已驳回',
  `legal_date` datetime DEFAULT NULL COMMENT '法务审批时间',
  `risk_control_id` bigint(20) DEFAULT NULL COMMENT '风控审批人id',
  `risk_control_name` varchar(50) DEFAULT NULL COMMENT '风控审批人姓名',
  `risk_control_status` varchar(2) DEFAULT NULL COMMENT '风控审批状态 01:待复核 02:已通过 03:已驳回',
  `risk_control_date` datetime DEFAULT NULL COMMENT '风控审批时间',
  `sign_type` varchar(2) DEFAULT NULL COMMENT '签收类型',
  `revision` varchar(32) DEFAULT NULL COMMENT '乐观锁',
  `create_by` bigint(20) DEFAULT NULL COMMENT '创建人',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` bigint(20) DEFAULT NULL COMMENT '更新人',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `delete_flag` char(1) DEFAULT NULL COMMENT '删除标识0删除 1',
  `remark` varchar(128) DEFAULT NULL COMMENT '备注',
  `apply_date` datetime DEFAULT NULL COMMENT '申请日期',
  `freeze_date` datetime DEFAULT NULL COMMENT '冻结日期',
  `freeze_number` varchar(32) DEFAULT NULL COMMENT '冻结子区间号',
  `freeze_amount` decimal(16,2) DEFAULT NULL COMMENT '冻结解冻金额',
  `handle_advice` varchar(128) DEFAULT NULL COMMENT '处理意见',
  `creator` varchar(30) DEFAULT NULL COMMENT '创建人',
  `updater` varchar(30) DEFAULT NULL COMMENT '修改人',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='冻结解冻表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_hint_accept_apply`
--

DROP TABLE IF EXISTS `scb_hint_accept_apply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_hint_accept_apply` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `bill_package_num` varchar(50) DEFAULT NULL COMMENT '票据(包)号',
  `subinterval_num` varchar(100) DEFAULT NULL COMMENT '子区间号',
  `bill_type` varchar(4) DEFAULT NULL COMMENT '票据种类，商票AC02，银票AC01',
  `bill_package_amount` decimal(13,2) DEFAULT NULL COMMENT '票据(包)金额,收款金额(元)',
  `un_exchange_flag` char(4) DEFAULT NULL COMMENT '不得转让标记EM01不得转让EM00可再转让',
  `sub_transfer_flag` char(4) DEFAULT NULL COMMENT '分包流转标记0否1是',
  `apply_date` datetime DEFAULT NULL COMMENT '申请时间',
  `apply_by` varchar(255) DEFAULT NULL COMMENT '申请人id',
  `applicant` bigint(20) DEFAULT NULL COMMENT '申请人名称',
  `send_date` datetime DEFAULT NULL COMMENT '发送日期',
  `draw_date` datetime DEFAULT NULL COMMENT '出票日期',
  `expire_date` datetime DEFAULT NULL COMMENT '到期日期',
  `drawer_ent_name` varchar(128) DEFAULT NULL COMMENT '出票人名称',
  `drawer_ent_id` bigint(20) DEFAULT NULL COMMENT '出票人id',
  `payee_ent_name` varchar(128) DEFAULT NULL COMMENT '收款人名称',
  `payee_ent_id` bigint(20) DEFAULT NULL COMMENT '收款人id',
  `accept_ent_name` varchar(128) DEFAULT NULL COMMENT '承兑人名称',
  `accept_ent_id` bigint(20) DEFAULT NULL COMMENT '承兑人id',
  `approval_status` varchar(2) DEFAULT NULL COMMENT '审批状态',
  `business_status` varchar(2) DEFAULT NULL COMMENT '业务状态：未发送10，发送中11，发送失败12，确认失败13，已签收15，已拒签16',
  `exchange_resp` varchar(255) DEFAULT NULL COMMENT '票交所返回的信息',
  `remark` varchar(128) DEFAULT '' COMMENT '说明',
  `delete_flag` char(1) NOT NULL DEFAULT '0' COMMENT '删除标识，是：1，否：0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) unsigned NOT NULL COMMENT '创建人ID(申请人id)',
  `creator` varchar(30) NOT NULL COMMENT '创建人名称(申请人名称)',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
  `updater` varchar(30) DEFAULT NULL COMMENT '更新人名称',
  `revision` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '修改版本号',
  `approver` varchar(255) DEFAULT NULL COMMENT '审批人名称',
  `approval_by` bigint(13) DEFAULT NULL COMMENT '审批人id',
  `approval_time` datetime DEFAULT NULL COMMENT '审批时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_hint_accept_sign`
--

DROP TABLE IF EXISTS `scb_hint_accept_sign`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_hint_accept_sign` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `bill_package_num` varchar(50) DEFAULT NULL COMMENT '票据(包)号',
  `subinterval_num` varchar(100) DEFAULT NULL COMMENT '子区间号',
  `bill_type` varchar(4) DEFAULT NULL COMMENT '票据种类，商票AC02，银票AC01',
  `bill_package_amount` decimal(13,2) DEFAULT NULL COMMENT '票据(包)金额(元)',
  `un_exchange_flag` char(4) DEFAULT NULL COMMENT '不得转让标记EM01不得转让EM00可再转让',
  `sub_transfer_flag` char(4) DEFAULT NULL COMMENT '分包流转标记0否1是',
  `draw_date` datetime DEFAULT NULL COMMENT '出票日期',
  `draw_name` varchar(255) DEFAULT NULL COMMENT '出票人',
  `draw_id` int(11) DEFAULT NULL COMMENT '出票id',
  `sign_type` varchar(2) DEFAULT NULL COMMENT '签收类型',
  `cancel_msg` varchar(255) DEFAULT NULL COMMENT '作废原因',
  `sign_fail_msg` varchar(255) DEFAULT NULL COMMENT '签收失败原因',
  `approval_status` varchar(10) DEFAULT NULL COMMENT '审批状态',
  `business_status` varchar(10) DEFAULT NULL COMMENT '业务状态：未发送10，发送中11，发送失败12，确认失败13，已签收15，已拒签16',
  `payee_name` varchar(100) DEFAULT NULL COMMENT '收款人名称',
  `payee_id` bigint(20) DEFAULT NULL COMMENT '收款人id',
  `remark` varchar(128) DEFAULT '' COMMENT '说明',
  `delete_flag` char(1) NOT NULL DEFAULT '0' COMMENT '删除标识，是：1，否：0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) unsigned NOT NULL COMMENT '创建人ID(申请人id)',
  `creator` varchar(30) NOT NULL COMMENT '创建人名称(申请人名称)',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
  `updater` varchar(30) DEFAULT NULL COMMENT '更新人名称',
  `revision` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '修改版本号',
  `approver` varchar(255) DEFAULT NULL COMMENT '审批人名称',
  `approval_by` bigint(13) DEFAULT NULL COMMENT '审批人id',
  `approval_time` datetime DEFAULT NULL COMMENT '审批时间',
  `apply_date` datetime DEFAULT NULL COMMENT '申请时间',
  `apply_by` varchar(255) DEFAULT NULL COMMENT '申请人id',
  `applicant` bigint(20) DEFAULT NULL COMMENT '申请人名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_hint_collect_apply`
--

DROP TABLE IF EXISTS `scb_hint_collect_apply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_hint_collect_apply` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `bill_package_num` varchar(50) DEFAULT NULL COMMENT '票据(包)号',
  `subinterval_num` varchar(100) DEFAULT NULL COMMENT '子区间号',
  `bill_type` varchar(4) DEFAULT NULL COMMENT '票据种类，商票AC02，银票AC01',
  `bill_package_amount` decimal(13,2) DEFAULT NULL COMMENT '票据(包)金额',
  `send_date` datetime DEFAULT NULL COMMENT '发送日期',
  `approval_status` varchar(10) DEFAULT NULL COMMENT '审批状态',
  `business_status` varchar(10) DEFAULT NULL COMMENT '业务状态：未发送10，发送中11，发送失败12，确认失败13，已签收15，已拒签16',
  `exchange_resp` varchar(255) DEFAULT NULL COMMENT '票交所返回的信息',
  `payee_name` varchar(100) DEFAULT NULL COMMENT '收款人名称',
  `payee_id` bigint(20) DEFAULT NULL COMMENT '收款人id',
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
  `apply_date` datetime DEFAULT NULL COMMENT '申请时间',
  `apply_by` varchar(255) DEFAULT NULL COMMENT '申请人id',
  `applicant` bigint(20) DEFAULT NULL COMMENT '申请人名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_hint_collect_sign`
--

DROP TABLE IF EXISTS `scb_hint_collect_sign`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_hint_collect_sign` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `bill_package_num` varchar(50) DEFAULT NULL COMMENT '票据(包)号',
  `subinterval_num` varchar(100) DEFAULT NULL COMMENT '子区间号',
  `bill_type` varchar(4) DEFAULT NULL COMMENT '票据种类，商票AC02，银票AC01',
  `bill_package_amount` decimal(13,2) DEFAULT NULL COMMENT '票据(包)金额,收款金额(元)',
  `un_exchange_flag` char(4) DEFAULT NULL COMMENT '不得转让标记EM01不得转让EM00可再转让',
  `sub_transfer_flag` varchar(10) DEFAULT NULL COMMENT '分包流转标记',
  `draw_date` datetime DEFAULT NULL COMMENT '出票日期',
  `expire_date` datetime DEFAULT NULL COMMENT '到期日期',
  `draw_name` varchar(100) DEFAULT NULL COMMENT '出票人名称',
  `draw_id` bigint(20) DEFAULT NULL COMMENT '出票人id',
  `payee_name` varchar(100) DEFAULT NULL COMMENT '收款人名称',
  `payee_id` bigint(20) DEFAULT NULL COMMENT '收款人id',
  `accept_name` varchar(128) DEFAULT NULL COMMENT '承兑人名称',
  `accept_id` bigint(20) DEFAULT NULL COMMENT '承兑人id',
  `approval_status` varchar(255) DEFAULT NULL COMMENT '审批状态',
  `business_status` varchar(255) DEFAULT NULL COMMENT '业务状态：未发送10，发送中11，发送失败12，确认失败13，已签收15，已拒签16',
  `cancel_msg` text COMMENT '作废原因',
  `sign_fail_msg` varchar(255) DEFAULT NULL COMMENT '签收失败原因',
  `remark` varchar(128) NOT NULL DEFAULT '' COMMENT '说明',
  `delete_flag` char(1) NOT NULL DEFAULT '0' COMMENT '删除标识，是：1，否：0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) unsigned NOT NULL COMMENT '创建人ID(申请人id)',
  `creator` varchar(30) NOT NULL COMMENT '创建人名称(申请人名称)',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
  `updater` varchar(30) DEFAULT NULL COMMENT '更新人名称',
  `revision` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '修改版本号',
  `approver` varchar(255) DEFAULT NULL COMMENT '审批人名称',
  `approval_by` bigint(13) DEFAULT NULL COMMENT '审批人id',
  `approval_time` datetime DEFAULT NULL COMMENT '审批时间',
  `apply_date` datetime DEFAULT NULL COMMENT '申请时间',
  `apply_by` varchar(255) DEFAULT NULL COMMENT '申请人id',
  `applicant` bigint(20) DEFAULT NULL COMMENT '申请人名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_report_bank_account`
--

DROP TABLE IF EXISTS `scb_report_bank_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_report_bank_account` (
  `id` bigint(30) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `cust_report_id` bigint(30) NOT NULL COMMENT '企业报备申请id，外键指向 scb_cust_report_apply.id',
  `bank_account` varchar(20) DEFAULT '' COMMENT '银行账号',
  `bank_name` varchar(50) DEFAULT '' COMMENT '银行账户名称',
  `open_bank_no` varchar(20) DEFAULT '' COMMENT '银行开户行行号',
  `open_bank_parti_no` varchar(50) DEFAULT '' COMMENT '银行账户开户行机构参与者no',
  `open_bank_parti_name` varchar(50) DEFAULT '' COMMENT '银行账户开户行机构参与者名称',
  `bank_account_type` varchar(2) DEFAULT '0' COMMENT '银行账户类型 基本存款  一般存款  专用存款 临时存款 人名币NRA账户 其他账户',
  `settled_path_flag` char(1) DEFAULT '0' COMMENT '备用清算路径标识：0-否，1-是',
  `delete_flag` char(1) CHARACTER SET utf8mb4 NOT NULL DEFAULT '0' COMMENT '删除标识，是：1，否：0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) unsigned NOT NULL COMMENT '创建人ID',
  `creator` varchar(30) CHARACTER SET utf8mb4 NOT NULL COMMENT '创建人名称',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
  `updater` varchar(30) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '更新人名称',
  `revision` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '修改版本号',
  PRIMARY KEY (`id`),
  KEY `idx_scb_cust_bank_account_1` (`cust_report_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='企业报备银行账户信息';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_trade_bg_contract`
--

DROP TABLE IF EXISTS `scb_trade_bg_contract`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_trade_bg_contract` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `attach_id` bigint(20) NOT NULL COMMENT '附件id',
  `batch_no` bigint(20) NOT NULL COMMENT '文件批次号，外键指向 附件表的批次id',
  `contract_no` varchar(30) NOT NULL COMMENT '合同编号',
  `contract_name` varchar(50) NOT NULL COMMENT '合同名称',
  `contract_amt` decimal(20,2) NOT NULL COMMENT '合同金额',
  `sign_date` date NOT NULL COMMENT '合同签订日期',
  `contract_type` char(1) NOT NULL COMMENT '合同类型，合同：1，订单：2',
  `delete_flag` char(1) NOT NULL DEFAULT '0' COMMENT '删除标识，是：1，否：0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) unsigned NOT NULL COMMENT '创建人ID',
  `creator` varchar(30) NOT NULL COMMENT '创建人名称',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
  `updater` varchar(30) DEFAULT NULL COMMENT '更新人名称',
  `revision` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '修改版本号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='贸易背景合同引用信息';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_trade_bg_invoice`
--

DROP TABLE IF EXISTS `scb_trade_bg_invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_trade_bg_invoice` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `attach_id` bigint(20) NOT NULL COMMENT '附件id',
  `batch_no` bigint(20) NOT NULL COMMENT '文件批次号，外键指向 附件表的批次id',
  `invoice_type` varchar(2) NOT NULL COMMENT '发票类型，增值税专用：01，增值税普通：02 全电发票：03',
  `invoice_code` varchar(20) NOT NULL DEFAULT '' COMMENT '发票代码',
  `invoice_no` varchar(30) NOT NULL COMMENT '发票号码',
  `include_tax_amt` decimal(20,2) NOT NULL COMMENT '发票金额（含税）',
  `exclude_tax_amt` decimal(20,2) NOT NULL COMMENT '发票金额（不含税）',
  `tax_amt` decimal(20,2) NOT NULL COMMENT '税额',
  `invoice_date` datetime NOT NULL COMMENT '发票日期（开票日期）',
  `check_code` varchar(30) NOT NULL DEFAULT '' COMMENT '校验码',
  `check_state` varchar(2) NOT NULL COMMENT '状态：未验真：01，已验真：02，验真失败：03',
  `delete_flag` char(1) NOT NULL DEFAULT '0' COMMENT '删除标识，是：1，否：0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) unsigned NOT NULL COMMENT '创建人ID',
  `creator` varchar(30) NOT NULL COMMENT '创建人名称',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
  `updater` varchar(30) DEFAULT NULL COMMENT '更新人名称',
  `revision` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '修改版本号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='贸易背景发票引用信息';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_trade_bg_rel`
--

DROP TABLE IF EXISTS `scb_trade_bg_rel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_trade_bg_rel` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `register_apply_id` bigint(20) NOT NULL COMMENT '贸易申请表Id，外键指向 scb_trade_bg_register_apply.id',
  `bg_attach_id` bigint(20) NOT NULL COMMENT '背景附件Id，外键指向 scb_trade_bg_contract.attach_id 或 scb_trade_bg_invoice.attach_id',
  `bg_attach_type` char(1) NOT NULL COMMENT '背景附件类型 合同 1  发票 2',
  `delete_flag` char(1) NOT NULL DEFAULT '0' COMMENT '删除标识，是：1，否：0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) unsigned NOT NULL COMMENT '创建人ID',
  `creator` varchar(30) NOT NULL COMMENT '创建人名称',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
  `updater` varchar(30) DEFAULT NULL COMMENT '更新人名称',
  `revision` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '修改版本号',
  PRIMARY KEY (`id`),
  KEY `idx_scb_trade_bg_rel_1` (`register_apply_id`),
  KEY `idx_scb_trade_bg_rel_2` (`bg_attach_id`),
  KEY `idx_scb_trade_bg_rel_3` (`bg_attach_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='贸易背景合同发票关联表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_trade_partner`
--

DROP TABLE IF EXISTS `scb_trade_partner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_trade_partner` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `business_part` varchar(16) DEFAULT NULL COMMENT '业务主体名称',
  `business_code` varchar(9) DEFAULT NULL COMMENT '业务主体代码 CS02 金融机构CS03 企业',
  `trade_name` varchar(128) DEFAULT NULL COMMENT '交易对手名称',
  `agency_name` varchar(128) DEFAULT NULL COMMENT '机构参与者名称',
  `agency_code` varchar(32) DEFAULT NULL COMMENT '机构参与者代码',
  `society_credit_code` varchar(32) DEFAULT NULL COMMENT '统一社会信用代码',
  `channel_name` varchar(128) DEFAULT NULL COMMENT '业务办理渠道名称',
  `channel_code` varchar(16) DEFAULT NULL COMMENT '业务办理渠道代码',
  `Is_ticket_platform` char(1) DEFAULT NULL COMMENT '是否供票平台企业  0否1是',
  `bill_type` varchar(4) DEFAULT NULL COMMENT '识别类型DT01 票据账户 DT02 银行账户',
  `bill_account` varchar(64) DEFAULT NULL COMMENT '票据账号',
  `bank_account` varchar(32) DEFAULT NULL COMMENT '银行账号',
  `bank_account_name` varchar(128) DEFAULT NULL COMMENT '银行账户名称',
  `bank_code` varchar(9) DEFAULT NULL COMMENT '银行账户账号',
  `bank_open_name` varchar(128) DEFAULT NULL COMMENT '银行账户开户行机构参与者名称',
  `bank_open_code` varchar(9) DEFAULT NULL COMMENT '银行账户开户行机构参与者代码',
  `revision` varchar(32) DEFAULT NULL COMMENT '乐观锁',
  `create_by` bigint(20) DEFAULT NULL COMMENT '创建人',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` bigint(20) DEFAULT NULL COMMENT '更新人',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `delete_flag` char(1) DEFAULT NULL COMMENT '删除标识 0删除 1正常',
  `remark` varchar(128) DEFAULT NULL COMMENT '备注',
  `enterprise_id` bigint(20) DEFAULT NULL COMMENT '当前企业id',
  `creator` varchar(30) DEFAULT NULL COMMENT '创建人',
  `updater` varchar(30) DEFAULT NULL COMMENT '修改人',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='交易对手管理表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_trade_register`
--

DROP TABLE IF EXISTS `scb_trade_register`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_trade_register` (
  `id` bigint(20) NOT NULL COMMENT '自增主键',
  `apply_id` bigint(20) NOT NULL COMMENT '申请表id，外键指向 scb_trade_register_apply.id',
  `bill_id` bigint(20) NOT NULL COMMENT '票据Id，外键指向 票据表.id',
  `bill_no` varchar(32) NOT NULL COMMENT '票据（包）号，外键指向 票据表.票据号',
  `subticket_interval` varchar(30) NOT NULL COMMENT '子票区间',
  `reg_state` varchar(2) NOT NULL COMMENT '登记状态，',
  `buss_state` varchar(2) NOT NULL COMMENT '业务状态，',
  `approval_by` varchar(32) DEFAULT NULL COMMENT '审批人id',
  `approver` varchar(32) NOT NULL DEFAULT '' COMMENT '审批人名称',
  `approval_time` datetime NOT NULL COMMENT '审批时间',
  `delete_flag` char(1) NOT NULL DEFAULT '0' COMMENT '删除标识，是：1，否：0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) unsigned NOT NULL COMMENT '创建人ID',
  `creator` varchar(30) NOT NULL COMMENT '创建人名称',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
  `updater` varchar(30) DEFAULT NULL COMMENT '更新人名称',
  `revision` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '修改版本号',
  PRIMARY KEY (`id`),
  KEY `idx_scb_trade_register_1` (`apply_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='贸易背景登记';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `scb_trade_register_apply`
--

DROP TABLE IF EXISTS `scb_trade_register_apply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scb_trade_register_apply` (
  `id` bigint(20) NOT NULL COMMENT '自增主键',
  `attach_rel_id` bigint(20) NOT NULL COMMENT '附件关联表id,外键指向 scb_trade_bg_rel.id',
  `register_id` bigint(20) NOT NULL COMMENT '登记表id,外键指向 scb_trade_register.id',
  `bill_id` bigint(20) NOT NULL COMMENT '票据Id，外键指向 票据表.id',
  `bill_no` varchar(32) NOT NULL COMMENT '票据（包）号，外键指向 票据表.票据号',
  `subticket_interval` varchar(30) NOT NULL COMMENT '票据子票区间',
  `trade_amt` decimal(20,2) NOT NULL COMMENT '交易金额',
  `trade_mode` varchar(1) NOT NULL COMMENT '贸易方式，货物贸易：1，服务贸易：2 货服贸易：3',
  `buyer_name` varchar(128) DEFAULT NULL COMMENT '购买方名称',
  `buyer_usci` varchar(30) NOT NULL COMMENT '购买方统一社会信用码',
  `buyer_channel_name` varchar(100) NOT NULL COMMENT '购买方业务办理渠道名称',
  `buyer_rec_type` varchar(2) NOT NULL COMMENT '购买方识别类型，票据账户：，银行账户： ',
  `buyer_bill_account` varchar(30) NOT NULL COMMENT '购买方票据账号',
  `buyer_bank_account` varchar(20) NOT NULL COMMENT '购买方银行账户',
  `buyer_bank_account_name` varchar(50) NOT NULL COMMENT '购买方银行账户名称',
  `buyer_open_bank_parti_name` varchar(100) NOT NULL COMMENT '购买方银行账户开户行机构参与者名称',
  `seller_name` varchar(128) DEFAULT NULL COMMENT '购买方名称',
  `seller_usci` varchar(30) NOT NULL COMMENT '销售方统一社会信用码',
  `seller_channel_name` varchar(100) NOT NULL COMMENT '销售方业务办理渠道名称',
  `seller_rec_type` varchar(2) NOT NULL COMMENT '销售方识别类型，票据账户：，银行账户： ',
  `seller_bill_account` varchar(30) NOT NULL COMMENT '销售方票据账号',
  `seller_bank_account` varchar(20) NOT NULL COMMENT '销售方银行账户',
  `seller_bank_account_name` varchar(50) NOT NULL COMMENT '销售方银行账户名称',
  `seller_open_bank_parti_name` varchar(100) NOT NULL COMMENT '销售方银行账户开户行机构参与者名称',
  `apply_date` datetime NOT NULL COMMENT '申请日期',
  `send_date` datetime NOT NULL COMMENT '发送日期',
  `apply_res` varchar(120) DEFAULT NULL COMMENT '发送申请返回结果',
  `reg_state` varchar(2) NOT NULL COMMENT '登记状态，',
  `buss_state` varchar(2) NOT NULL COMMENT '业务状态，',
  `delete_flag` char(1) NOT NULL DEFAULT '0' COMMENT '删除标识，是：1，否：0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) unsigned NOT NULL COMMENT '创建人ID',
  `creator` varchar(30) NOT NULL COMMENT '创建人名称',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
  `updater` varchar(30) DEFAULT NULL COMMENT '更新人名称',
  `revision` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '修改版本号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='贸易背景登记申请';
/*!40101 SET character_set_client = @saved_cs_client */;

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
  `delete_flag` char(1) DEFAULT NULL COMMENT '删除标识 0删除 1正常',
  `remark` varchar(128) DEFAULT NULL COMMENT '备注',
  `approval_by` bigint(20) DEFAULT NULL COMMENT '审批人id',
  `approver` varchar(128) DEFAULT NULL COMMENT '审批人姓名',
  `send_date` datetime DEFAULT NULL COMMENT '发送日期',
  `creator` varchar(30) DEFAULT NULL COMMENT '创建人',
  `updater` varchar(30) DEFAULT NULL COMMENT '修改人',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='撤票业务表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_auth_info`
--

DROP TABLE IF EXISTS `user_auth_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_auth_info` (
  `id` bigint(30) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `account_id` bigint(30) DEFAULT NULL COMMENT '账户表主键',
  `id_Type` varchar(3) DEFAULT NULL COMMENT '证件类型 1-身份证，2-护照，3-港澳台通行证，4-台胞证，5-军官证，6-警官证，7-士兵证，8-回乡证',
  `head_photo_url` varchar(255) DEFAULT NULL COMMENT '身份证人像面照片路径',
  `back_photo_url` varchar(255) DEFAULT NULL COMMENT '身份证国徽面照片路径',
  `usr_name` varchar(255) DEFAULT NULL COMMENT '用户名称',
  `gender` char(1) DEFAULT '0' COMMENT '性别 0男 1女',
  `id_card` varchar(20) DEFAULT NULL COMMENT '身份证号',
  `address` varchar(200) DEFAULT NULL COMMENT '地址',
  `idcard_sdate` varchar(10) DEFAULT NULL COMMENT '身份证生效日',
  `idcard_edate` varchar(10) DEFAULT NULL COMMENT '身份证到期日',
  `idcard_usedate` varchar(10) DEFAULT NULL COMMENT '身份证有效期',
  `email` varchar(100) DEFAULT NULL COMMENT '邮箱',
  `mobile` varchar(20) DEFAULT NULL COMMENT '手机号',
  `bank_no` varchar(100) DEFAULT '' COMMENT '银行账号',
  `openingbank_name` varchar(100) DEFAULT '' COMMENT '开户行',
  `auth_Type` char(1) DEFAULT '0' COMMENT '认证类型 0身份证 1银行卡',
  `res_message` varchar(255) DEFAULT NULL COMMENT '鑫海汇返回的认证信息',
  `res_code` varchar(255) DEFAULT NULL COMMENT '鑫海汇返回的认证编码',
  `res_flow_no` varchar(255) DEFAULT NULL COMMENT '鑫海汇返回的流水号',
  `delete_flag` char(1) NOT NULL DEFAULT '0' COMMENT '删除标识，是：1，否：0',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` bigint(20) unsigned NOT NULL COMMENT '创建人ID',
  `creator` varchar(30) NOT NULL COMMENT '创建人名称',
  `update_time` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `update_by` bigint(20) unsigned DEFAULT NULL COMMENT '修改人ID',
  `updater` varchar(30) DEFAULT NULL COMMENT '更新人名称',
  `revision` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '修改版本号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户实名认证登记表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping routines for database 'scb_bill'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-07 15:43:31
