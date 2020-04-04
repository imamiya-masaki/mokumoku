class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        write_only_fields = ('password')
        read_only_fields = ('id')

        def create(self, validated_data):
          """
          passwordをハッシュ化してから登録(djangoデフォルトのライブラリを使用)
          """
          password = validated_data.get('password')
          validated_data['password'] = make_password(password)
          return User.objects.create(**validated_data)
