// import { Controller, Get, Post, Body, Param } from '@nestjs/common';
// import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiResponse } from '@nestjs/swagger';
// import { CreateCatDto } from './dto/create-cat.dto';

// @ApiTags('cats')
// @Controller('cats')
// export class CatsController {
//   @Post()
//   @ApiOperation({ summary: 'Create cat' })
//   @ApiBody({ type: CreateCatDto })
//   @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
//   @ApiResponse({ status: 403, description: 'Forbidden.' })
//   create(@Body() createCatDto: CreateCatDto) {
//     return 'This action adds a new cat';
//   }

//   @Get(':id')
//   @ApiOperation({ summary: 'Get cat by id' })
//   @ApiParam({ name: 'id', required: true, description: 'Cat ID' })
//   @ApiResponse({ status: 200, description: 'The found record' })
//   @ApiResponse({ status: 404, description: 'Not Found' })
//   findOne(@Param('id') id: string) {
//     return `This action returns a #${id} cat`;
//   }
// }
