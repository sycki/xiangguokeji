<template>
<v-container class="grey lighten-5">
<!-- <v-container> -->
<v-spacer style="height: 50px;"></v-spacer>
    <v-row>
        <v-card class="d-inline-block mx-auto">
            <v-container>
                <v-row justify="space-between">
                    <!-- 用于居中图像 -->
                    <v-spacer></v-spacer>
                    <v-col>
                        <v-img src="../assets/shangcheng-mobile.png" width="250px"></v-img>
                    </v-col>
                    <v-spacer></v-spacer>
                    
                    <v-col>
                        <v-row class="flex-column ma-0"
                            style="justify-content: space-between;">
                            <v-col>
                            <v-card-title>
                            手机APP
                            </v-card-title>

                            <v-card-subtitle>
                            适用于安卓系统手机
                            </v-card-subtitle>
                            <v-card-text>
                            技术栈：H5 + CSS3 + VUE + GOALNG + MySQL
                            </v-card-text>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text href="/contact">询问价格</v-btn>
                            <v-btn text href="/contact">联系销售</v-btn>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-btn color="purple" ext href="/contact">下单</v-btn>
                            <v-spacer></v-spacer>
                            </v-card-actions>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-row>
    <v-spacer style="height: 200px;"></v-spacer>
    <v-row>
        <v-card class="d-inline-block mx-auto">
            <v-container>
                <v-row justify="space-between">
                    <v-col>
                        <v-img src="../assets/menhu-mac.png" width="500px"></v-img>
                    </v-col>
                    
                    <v-col>
                        <v-row class="flex-column ma-0"
                            style="justify-content: space-between;">
                            <v-col>
                            <v-card-title>
                            门户类网站
                            </v-card-title>

                            <v-card-subtitle>
                            同时适用于电脑和移动端
                            </v-card-subtitle>
                            <v-card-text>
                            技术栈：H5 + CSS3 + VUE + Nginx
                            </v-card-text>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text href="/contact">询问价格</v-btn>
                            <v-btn text href="/contact">联系销售</v-btn>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-btn color="purple" ext href="/contact">下单</v-btn>
                            <v-spacer></v-spacer>
                            </v-card-actions>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-row>
    <v-spacer style="height: 200px;"></v-spacer>
    <v-row>
        <v-card class="d-inline-block mx-auto">
            <v-container>
                <v-row justify="space-between">
                    <v-col>
                        <v-img src="../assets/shangcheng-mac.png" width="500px"></v-img>
                    </v-col>
                    
                    <v-col>
                        <v-row class="flex-column ma-0"
                            style="justify-content: space-between;">
                            <v-col>
                            <v-card-title>
                            电商类网站
                            </v-card-title>

                            <v-card-subtitle>
                            同时适用于电脑和移动端
                            </v-card-subtitle>
                            <v-card-text>
                            技术栈：H5 + CSS3 + VUE + GOLANG + MySQL
                            </v-card-text>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text href="/contact">询问价格</v-btn>
                            <v-btn text href="/contact">联系销售</v-btn>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-btn color="purple" ext href="/contact">下单</v-btn>
                            <v-spacer></v-spacer>
                            </v-card-actions>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-row>
    <v-spacer style="height: 50px;"></v-spacer>
</v-container>
</template>

<script>
import { mdiAccount } from '@mdi/js'
export default {
    data: () => ({
      mdiAccount1: mdiAccount
    }),
}
</script>