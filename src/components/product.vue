<template>
    <v-container class="grey lighten-5">
    
    <v-spacer style="height: 30px;"></v-spacer>
    
    <!-- 手机APP -->
    <v-banner two-line>
        <v-avatar
        slot="icon"
        color="deep-purple accent-4"
        tile
        >
        <v-icon size="30" color="white">{{ mdiCellphoneIphone }}</v-icon>
        </v-avatar>
        【手机APP】<br>
        专业制作各类手机应用，包括新闻类APP、零售行业APP、餐饮类APP、<br>
        阅读类APP、聊天类APP等、并且提供长期的售后支持。
        <template v-slot:actions>
            <v-btn color="primary" href="/contact.html">更多案例</v-btn>
            <v-btn color="primary" href="/contact.html">联系销售</v-btn>
        </template>
    </v-banner>
    
    <v-spacer style="height: 10px;"></v-spacer>
    
    <v-row justify="center">
        <v-card class="d-inline-block mx-auto">
            <v-container>
                <v-row>
                    <v-col>
                        <v-img src="../assets/零售首页-phone.png" width="250px"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
        <v-card class="d-inline-block mx-auto">
            <v-container>
                <v-row>
                    <v-col>
                        <v-img src="../assets/零售发现-phone.png" width="250px"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
        <v-card class="d-inline-block mx-auto">
            <v-container>
                <v-row>
                    <v-col>
                        <v-img src="../assets/零售商店-phone.png" width="250px"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
        <v-card class="d-inline-block mx-auto">
            <v-container>
                <v-row>
                    <v-col>
                        <v-img src="../assets/零售个人-phone.png" width="250px"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-row>
    
    <v-spacer style="height: 50px;"></v-spacer>
    
    <!-- 企业门户网站 -->
    <v-banner two-line>
        <v-avatar
        slot="icon"
        color="deep-purple accent-4"
        tile
        >
        <v-icon size="27" color="white">{{ mdiDesktopMac }}</v-icon>
        </v-avatar>
        【企业门户网站】<br>
        企业官方网站是一个公司的门面，好的门面可以快速获得客户的信任感，<br>
        支持快速建站，并且提供长期的售后支持。
        <template v-slot:actions>
            <v-btn color="primary" href="/contact.html">更多案例</v-btn>
            <v-btn color="primary" href="/contact.html">联系销售</v-btn>
        </template>
    </v-banner>
    <v-spacer style="height: 0px;"></v-spacer>
    
    <v-row>
        <v-col>
            <v-card
                class="mx-auto"
                max-width="360"
                style="padding: 20px;"
            >
                <v-img
                contain
                width="320px"
                height="300px"
                src="../assets/企业官网1-mac.png"
                >
                </v-img>

                <v-card-subtitle class="pb-0">企业官网</v-card-subtitle>

                <v-card-text class="text--primary">
                <div>技术栈：H5 + CSS3 + Nginx</div>

                <div>官方网站是一个公司的门面，好的门面可以快速获得客户的信任感。</div>
                </v-card-text>

                <v-card-actions>
                <v-btn color="primary" href="/contact.html">
                    更多案例
                </v-btn>

                <v-btn color="primary" href="/contact.html">
                    联系销售
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col>
            <v-card
                class="mx-auto"
                max-width="360"
                style="padding: 20px;"
            >
                <v-img
                contain
                width="320px"
                height="300px"
                src="../assets/企业官网2-mac.png"
                >
                </v-img>

                <v-card-subtitle class="pb-0">企业官网</v-card-subtitle>

                <v-card-text class="text--primary">
                <div>技术栈：H5 + CSS3 + Nginx</div>

                <div>官方网站是一个公司的门面，好的门面可以快速获得客户的信任感。</div>
                </v-card-text>

                <v-card-actions>
                <v-btn color="primary" href="/contact.html">
                    更多案例
                </v-btn>

                <v-btn color="primary" href="/contact.html">
                    联系销售
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col>
            <v-card
                class="mx-auto"
                max-width="360"
                style="padding: 20px;"
            >
                <v-img
                contain
                width="320px"
                height="300px"
                src="../assets/企业官网3-mac.png"
                >
                </v-img>

                <v-card-subtitle class="pb-0">企业官网</v-card-subtitle>

                <v-card-text class="text--primary">
                <div>技术栈：H5 + CSS3 + Nginx</div>

                <div>官方网站是一个公司的门面，好的门面可以快速获得客户的信任感。</div>
                </v-card-text>

                <v-card-actions>
                <v-btn color="primary" href="/contact.html">
                    更多案例
                </v-btn>

                <v-btn color="primary" href="/contact.html">
                    联系销售
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
    
    <v-spacer style="height: 50px;"></v-spacer>

    <!-- 商城类网站 -->
    <v-banner two-line>
        <v-avatar
        slot="icon"
        color="deep-purple accent-4"
        tile
        >
        <v-icon size="27" color="white">{{ mdiDesktopMac }}</v-icon>
        </v-avatar>
        【电商类网站】<br>
        专业制作各类电商网站，包括服装销售网站、母婴用品商城、餐饮销售网站等，<br>
        并且支持数万人同时在线，支持负载均衡和数据自动备份，提供长期的售后服务和技术支持。
        <template v-slot:actions>
            <v-btn color="primary" href="/contact.html">更多案例</v-btn>
            <v-btn color="primary" href="/contact.html">联系销售</v-btn>
        </template>
    </v-banner>
    <v-spacer style="height: 0px;"></v-spacer>
    
    <v-row>
        <v-col>
            <v-card
                class="mx-auto"
                max-width="360"
                style="padding: 20px;"
            >
                <v-img
                contain
                width="320px"
                height="300px"
                src="../assets/商城1-mac.png"
                >
                </v-img>

                <v-card-subtitle class="pb-0">电商网站</v-card-subtitle>

                <v-card-text class="text--primary">
                <div>技术栈：H5 + CSS3 + Golang + TIDB</div>

                <div>专业开发电商类网站，支持数万人同时在线，支持负载均衡和数据自动备份。</div>
                </v-card-text>

                <v-card-actions>
                <v-btn color="primary" href="/contact.html">
                    更多案例
                </v-btn>

                <v-btn color="primary" href="/contact.html">
                    联系销售
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col>
            <v-card
                class="mx-auto"
                max-width="360"
                style="padding: 20px;"
            >
                <v-img
                contain
                width="320px"
                height="300px"
                src="../assets/商城2-mac.png"
                >
                </v-img>

                <v-card-subtitle class="pb-0">电商网站</v-card-subtitle>

                <v-card-text class="text--primary">
                <div>技术栈：H5 + CSS3 + Golang + TIDB</div>

                <div>专业开发电商类网站，支持数万人同时在线，支持负载均衡和数据自动备份。</div>
                </v-card-text>

                <v-card-actions>
                <v-btn color="primary" href="/contact.html">
                    更多案例
                </v-btn>

                <v-btn color="primary" href="/contact.html">
                    联系销售
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col>
            <v-card
                class="mx-auto"
                max-width="360"
                style="padding: 20px;"
            >
                <v-img
                contain
                width="320px"
                height="300px"
                src="../assets/商城3-mac.png"
                >
                </v-img>

                <v-card-subtitle class="pb-0">电商网站</v-card-subtitle>

                <v-card-text class="text--primary">
                <div>技术栈：H5 + CSS3 + Golang + TIDB</div>

                <div>专业开发电商类网站，支持数万人同时在线，支持负载均衡和数据自动备份。</div>
                </v-card-text>

                <v-card-actions>
                <v-btn color="primary" href="/contact.html">
                    更多案例
                </v-btn>

                <v-btn color="primary" href="/contact.html">
                    联系销售
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import { mdiCellphoneIphone, mdiDesktopMac } from '@mdi/js'
export default {
    data: () => ({
      mdiCellphoneIphone: mdiCellphoneIphone,
      mdiDesktopMac:mdiDesktopMac
    }),
}
</script>